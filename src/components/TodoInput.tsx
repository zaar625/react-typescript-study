import styles from '../Todo.module.css'
import { useContext } from 'react';
import TodoContext from '../contexts/todo';
//props 타입스크립트 인터페이스 정의

const TodoInput = () => {
  const {state, actions } = useContext(TodoContext)

  return (
        <div className={styles.input}>
          <form onSubmit={actions.onSubmit}>
            <input
              placeholder='할 일을 입력하세요'  
              value={state.input} 
              onChange={actions.onChange}
            />
            <button type="submit">추가</button>
          </form>
        </div>
  )
}

export default TodoInput;