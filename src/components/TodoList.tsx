import styles from '../Todo.module.css'
import { useContext } from 'react'
import TodoItem from './TodoItem'
import TodoContext from '../contexts/todo'
import {Todo} from '../App';

//props에 대한 타입스크립트 인터페이스를 정의한다.
interface Props {
  readonly todos:Todo[];
  readonly onRemove:(id:number)=> void;
  readonly onToggle:(id:number) => void;
}

export const TodoList = ({todos,onRemove,onToggle}:Props) => {
  const {state, actions} = useContext(TodoContext)

  return (
    <div className={styles.list}>
      {todos.map((todo) =>(
          <TodoItem  
          todo={todo} 
          key={todo.id}
          onRemove={onRemove}
          onToggle={onToggle}/>
      ))}
  
    </div>




  )
}
