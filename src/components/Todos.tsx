
import TodoFooter from './TodoFooter'
import  {TodoHeader}  from './TodoHeader'
import  TodoInput  from './TodoInput'
import  {TodoList} from './TodoList'
import {Todo} from  '../App'

import  {TodoProvider}  from '../contexts/todo'

//컴포넌트 props에 대한 타입스크립트 인터페이스를 정의한다.
interface Props {
  readonly input:string;
  readonly todos:Todo[];
  readonly onRemove:(id:number) => void;
  readonly onToggle:(id:number) => void;
  readonly onClearAll:() => void;
  readonly onInsert:(input:string) => void;
  readonly onChangeInput:(input:string) => void;
}

const Todos = ({input,todos,onRemove,onToggle,onClearAll,onInsert,onChangeInput}:Props) =>{
  return(
    <div>
      <TodoHeader/>
      <TodoInput input={input} onInsert={onInsert} onChangeInput={onChangeInput}/>
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
      <TodoFooter onClearAll={onClearAll}/>
    </div>

  )
}

export default Todos