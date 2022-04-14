import { useState, useRef, useCallback} from 'react'
import TodoFooter from './TodoFooter'
import { TodoHeader } from './TodoHeader'
import { TodoInput } from './TodoInput'
import { TodoList } from './TodoList'
import { Todo } from '../App'

const Todos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const nextId = useRef(1);

  //Todo 항목 추가 이벤트 처리 함수
  const onInsert = useCallback((text:string)=> {
    const todo ={
      id: nextId.current,
      text,
      done:false
    };
    // console.log(todo.id)

    // setTodos(todos.concat(todo))를 함수형으로 변환
    setTodos((todos)=>todos.concat(todo))

    nextId.current += 1;
  },[])

  //Todo 항목 삭제 이벤트 처리 함수
  const onRemove = useCallback((id:number)=>{
    setTodos((todos)=>todos.filter((todo)=>todo.id !== id));
  },[])

  //Todo 항목 모두 삭제 이벤트 처리 함수
  const onClearAll = useCallback(() =>{
    setTodos(()=>[]);
  },[])

  //완료 체크 이벤트 처리 함수
  const onToggle = useCallback((id:number) =>{
    setTodos((todos)=>todos.map((todo)=>
      todo.id === id ? {...todo, done:!todo.done} : todo
    ))
  },[])

  return (
    
    <div>
        <TodoHeader/>
        <TodoInput onInsert={onInsert}/>
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
        <TodoFooter onClearAll={onClearAll}/>
    </div>
  )
}

export default Todos