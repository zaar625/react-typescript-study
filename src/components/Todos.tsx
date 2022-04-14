import { useState, useRef } from 'react'
import TodoFooter from './TodoFooter'
import { TodoHeader } from './TodoHeader'
import { TodoInput } from './TodoInput'
import { TodoList } from './TodoList'
import { Todo } from '../App'

const Todos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const nextId = useRef(1);

  //Todo 항목 추가 이벤트 처리 함수
  const onInsert = (text:string)=> {
    const todo ={
      id: nextId.current,
      text,
      done:false
    };
    // console.log(todo.id)

    setTodos(todos.concat(todo));

    nextId.current += 1;
  }

  //Todo 항목 삭제 이벤트 처리 함수
  const onRemove=(id:number)=>{
    setTodos(todos.filter((todo)=>todo.id !== id));
  }

  //Todo 항목 모두 삭제 이벤트 처리 함수
  const onClearAll = () =>{
    setTodos([]);
  }

  //완료 체크 이벤트 처리 함수
  const onToggle = (id:number) =>{
    setTodos(todos.map((todo)=>
      todo.id === id ? {...todo, done:!todo.done} : todo
    ))
  }
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