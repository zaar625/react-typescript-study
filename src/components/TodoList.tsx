import styles from '../Todo.module.css'
import { useContext } from 'react'
import TodoItem from './TodoItem'
import TodoContext from '../contexts/todo'

export const TodoList = () => {
  const {state, actions} = useContext(TodoContext)

  return (
    <div className={styles.list}>
      {state.todos.map((todo) =>(
          <TodoItem  
          todo={todo} 
          key={todo.id}
          onRemove={actions.onRemove}
          onToggle={actions.onToggle}/>
      ))}
  
    </div>




  )
}
