import { useContext } from 'react';
import styles from '../Todo.module.css'
import TodoContext from '../contexts/todo'

//컴포넌트 props에 대한 타입스크립트 인터페이스 정의
interface Props {
  readonly onClearAll: () =>void;
}

const TodoFooter = ({onClearAll}:Props) => {
  const {actions} = useContext(TodoContext)

  return (
  <div className={styles.footer}>
    <button onClick={onClearAll}>모두삭제</button>
  </div>

  )
}

export default TodoFooter