import React,{createContext, useState, useCallback, useRef} from "react";
import { Todo } from "../App";

interface TodoState {
    readonly todos: Todo[]; 
    readonly input:string;
}

interface TodoAction {
    readonly setTodos:(todos:Todo[])=> void;
    readonly onInsert:(text:string)=> void;
    readonly onRemove:(id:number)=> void;
    readonly onToggle:(id:number) => void;
    readonly onClearAll:() => void;
    readonly onChange:(e:React.ChangeEvent<HTMLInputElement>) => void;
    readonly onSubmit:(e:React.FormEvent<HTMLFormElement>) => void;
}

interface Context {
    readonly state: TodoState;
    readonly actions: TodoAction;
}

const TodoContext = createContext<Context>({
    state: {todos:[], input:''},
    actions:{
        setTodos:(todos:Todo[]):void => {},
        onInsert:(text:string):void => {},
        onRemove:(id:number):void => {},
        onToggle:(id:number):void => {},
        onChange:(e:React.ChangeEvent<HTMLInputElement>):void => {},
        onClearAll:():void => {},
        onSubmit:(e:React.FormEvent<HTMLFormElement>):void => {},
    }
});

//Props 타입스크립트 인터페이스 정의
interface Props {
    children:JSX.Element | JSX.Element[];
}

const TodoProvider = ({children}:Props) =>{
//--------------------업데이트 함수 정의----------------------//
    const [todos, setTodos] = useState<Todo[]>([]);
    const [input, setInput] = useState('');

    const nextId = useRef(1);

    //Todo 항목 추가 이벤트 처리 함수
    const onInsert = useCallback((text:string)=> {
        const todo ={
        id: nextId.current,
        text,
        done:false
        };

        setTodos((todos)=>todos.concat(todo))

        nextId.current += 1;
    },[])

    //Todo 항목 삭제 이벤트 처리 함수
    const onRemove = useCallback((id:number)=>{
        setTodos((todos)=>todos.filter((todo)=>todo.id !== id));
    },[])

    //완료 체크 이벤트 처리 함수
    const onToggle = useCallback((id:number) =>{
        setTodos((todos)=>todos.map((todo)=>
        todo.id === id ? {...todo, done:!todo.done} : todo
        ))
    },[])

        //Todo 항목 모두 삭제 이벤트 처리 함수
        const onClearAll = useCallback(() =>{
        setTodos(()=>[]);
        },[])

    //텍스트 입력 요소 변경 이벤트 처리
    const onChange = useCallback((e)=>{
        setInput(e.target.value);
    },[])

    //submit 이벤트 처리하는 onsubmit 함수
    const onSubmit = useCallback((e)=>{
        e.preventDefault();

        onInsert(input);
        setInput('')
        
    },[onInsert, input])
//-------------- 상태와 업데이트 함수(action)을 묶어 value 객체 생성
    const value = {
        state:{todos, input},
        actions: {
            setTodos,
            onInsert,
            onRemove,
            onToggle,
            onClearAll,
            onChange,
            onSubmit,
        },
    };

    return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>

};
//TodoContext의 Consumer 속성을 TodoConsumer 변수에 저장
const {Consumer:TodoConsumer} = TodoContext;

//TodoProvider, TodoConsumer 내보내기
export {TodoProvider,TodoConsumer};
export default TodoContext;