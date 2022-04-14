import { useState, useRef, useCallback} from 'react'
import TodoFooter from './TodoFooter'
import { TodoHeader } from './TodoHeader'
import { TodoInput } from './TodoInput'
import { TodoList } from './TodoList'
import { Todo } from '../App'

const Todos = () => {
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

  return (
    
    <div>
        <TodoHeader/>
        <TodoInput input={input} onChange={onChange} onSubmit={onSubmit}/>
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
        <TodoFooter onClearAll={onClearAll}/>
    </div>
  )
}

export default Todos