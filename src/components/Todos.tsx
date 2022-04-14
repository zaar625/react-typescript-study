
import TodoFooter from './TodoFooter'
import  {TodoHeader}  from './TodoHeader'
import  TodoInput  from './TodoInput'
import  {TodoList} from './TodoList'

import  {TodoProvider}  from '../contexts/todo'

const Todos = () =>{
  return(
    <TodoProvider>
      <TodoHeader/>
      <TodoInput/>
      <TodoList/>
      <TodoFooter/>
    </TodoProvider>
  )
}

export default Todos