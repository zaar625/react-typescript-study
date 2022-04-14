import React from 'react';
import styles from '../Todo.module.css'
//props 타입스크립트 인터페이스 정의
interface Props {
  readonly input: string;
  readonly onChange: (e:React.ChangeEvent<HTMLInputElement>)=>void;
  readonly onSubmit: (e:React.FormEvent<HTMLFormElement>)=>void;
}

//onInsert 함수 전달 받음
export const TodoInput = ({input, onChange, onSubmit}:Props) => {

  return (
    <div className={styles.input}>
      <form onSubmit={onSubmit}>
        <input value={input}placeholder='할 일을 입력하기' onChange={onChange}/>
        <button type='submit'>추가</button>
      </form>
    </div>
  )
}
