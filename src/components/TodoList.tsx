import styles from '../Todo.module.css'
import TodoItem from './TodoItem'
import {TodoConsumer} from '../contexts/todo'

export const TodoList = () => {
  return (
    <TodoConsumer>
      {({state, actions}) => (
        <div className={styles.list}>
          {state.todos.map((todo)=>(
            <TodoItem  
            todo={todo} 
            key={todo.id}
            onRemove={actions.onRemove}
            onToggle={actions.onToggle}/>
          ))}
        </div>
      )

      }
    </TodoConsumer>
  )
}
