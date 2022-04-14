import styles from '../Todo.module.css'
import TodoItem from './TodoItem'
import {TodoConsumer} from '../contexts/todo'

export const TodoList = () => {
  return (
    <TodoConsumer>
      {(value) => (
        <div className={styles.list}>
          {value.state.todos.map((todo)=>(
            <TodoItem  
            todo={todo} 
            key={todo.id}
            onRemove={value.actions.onRemove}
            onToggle={value.actions.onToggle}/>
          ))}
        </div>
      )

      }
    </TodoConsumer>
  )
}
