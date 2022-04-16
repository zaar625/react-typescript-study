//Todo 애플리케이션 구현에 필요한 리덕스 관련 코드 파일
import {Todo} from '../App'


//액션 타입
const CHANGE_TODO_INPUT = 'CHANGE_RODO_INPUT'as const;
const ADD_TODO = "ADD_TODO" as const;
const TOGGLE_TODO_STATUS = 'TOGGLE_TODO_STATUS' as const;
const REMOVE_TODO = 'REMOVE_TODO' as const;
const CLEAR_ALL_TODOS = 'CLEAR_ALL_TODOS' as const;

//액션 생성 함수를 만들고 외부에서 사용할 수 있도록 공개
export const changeTodoInput = (input:string) => ({
    type:CHANGE_TODO_INPUT,
    input
});

export const clearAllTodos=() => ({
    type:CLEAR_ALL_TODOS,
});

export const addTodo = (input:string) =>({
    type:ADD_TODO,
    todo:{
        text:input,
        done:false,
    }
});

export const toggleTodoStatus = (id: number) => ({
    type: TOGGLE_TODO_STATUS,
    id,
});

export const removeTodo = (id:number)=>({
    type:REMOVE_TODO,
    id,
});

export const clearAlltodos = () => ({
    type:CLEAR_ALL_TODOS,
})

//상태 인터페이스 정의
export interface TodoState{
    input:string;
    todos:Todo[];
    nextTodoId:number;
}
//초기상태
const initialState:TodoState = {
    input:'',
    todos:[],
    nextTodoId: 1,
}

//리듀서 함수 정의 - 액션 생성함수의 반환값에 대한 타입을 유니온으로 정의한다. 

type TodoAction = 
    ReturnType<typeof changeTodoInput>
    |ReturnType<typeof addTodo>
    |ReturnType<typeof toggleTodoStatus>
    |ReturnType<typeof removeTodo>
    |ReturnType<typeof clearAllTodos>; 

//리듀서 함수 정의 -- 상태의 변화를 일으키는 함수.
function todos(state:TodoState = initialState, action:TodoAction){
    switch(action.type){
        case CHANGE_TODO_INPUT:
            return{
                ...state,
                input: action.input,
            };
            case ADD_TODO:
                const newTodo ={...action.todo, id:state.nextTodoId};
                state.nextTodoId++;

                return{
                    ...state,
                    todos:state.todos.concat(newTodo),
                };
            case TOGGLE_TODO_STATUS:
                return {
                    ...state,
                    todos: state.todos.map((todo)=>
                        todo.id === action.id ? {...todo, done: !todo.done} : todo
                    )
                }
            case REMOVE_TODO:
                return {
                    ...state,
                    todos: state.todos.filter((todo) => todo.id !== action.id),
                };
            case CLEAR_ALL_TODOS:
                return {
                    ...state,
                    todos:[]
                }
            default:
                return state;
    }
}

export default todos;