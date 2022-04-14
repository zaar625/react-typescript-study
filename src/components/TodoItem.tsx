import React from 'react'
import styles from '../Todo.module.css'
import { Todo } from '../App'

interface Props {
  readonly todo: Todo;
  //함수 타입 추가
  readonly onRemove:(id:number)=>void;
  readonly onToggle:(id:number)=>void;
}
const TodoItem = ({todo, onRemove, onToggle}:Props) => {
  const {id, text, done} = todo;

  return (
    <div className={styles.item}>
      <input type='checkbox' checked={done} onChange={()=>onToggle(id)}/>
      <span>{text}</span>
      <button onClick={()=>onRemove(id)}>삭제</button>
    </div>
  )
}

export default TodoItem