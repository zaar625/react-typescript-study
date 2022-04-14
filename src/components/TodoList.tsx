import styles from '../Todo.module.css'
import TodoItem from './TodoItem'
import { Todo } from '../App'

interface Props {
  readonly todos: Todo[];
  //함수 타입 추가
  readonly onRemove:(id:number)=>void;
  readonly onToggle:(id:number)=>void;
}


export const TodoList = ({todos, onRemove, onToggle}:Props) => {
  // const [todos] = useState(['todoItem1','todoItem2','todoItem3'])

  return (
    <div className={styles.item}>
      {todos.map((todo)=>
        <TodoItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle}/>
      )}
    </div>
  )
}
