import styles from '../Todo.module.css'

interface Props {
  readonly onClearAll:()=>void
}

const TodoFooter = ({onClearAll}:Props) => {
  return (
    <div className={styles.footer}>
      <button onClick={()=>onClearAll()}>모두삭제</button>
    </div>
  )
}

export default TodoFooter