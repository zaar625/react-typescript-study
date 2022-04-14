import React, { useState } from 'react'
import styles from '../Todo.module.css'
//props 타입스크립트 인터페이스 정의
interface Props {
  readonly onInsert:(value:string) => void;
}

//onInsert 함수 전달 받음
export const TodoInput = ({onInsert}:Props) => {
  
  const [value, setValue] = useState('')

  const onSubmit = (e:React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    onInsert(value);
    setValue('');
  }
  
  const onChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    setValue(e.target.value)
  }

  

  return (
    <div className={styles.input}>
      <form onSubmit={onSubmit}>
        <input value={value}placeholder='할 일을 입력하기' onChange={onChange}/>
        <button type='submit'>추가</button>
      </form>
    </div>
  )
}
