import React from "react";
import { connect } from 'react-redux';
import {changeTodoInput,clearAllTodos,addTodo,removeTodo,toggleTodoStatus} from '../modules/todos'
import Todos from '../components/Todos';
import { TodoState } from "../modules/todos";
import { Dispatch } from "redux";

//타입스크립트 타입 정의

type PropsState = ReturnType<typeof mapStateToProps>;
type PropsDispatch = ReturnType<typeof mapDispatchToProps>;

//props 타입스크립트 인터페이스 정의

interface Props extends PropsState, PropsDispatch {}

//connect 함수에 의해 상태와 스토어 상태 변경 함수를 props로 전달받음
const TodosContainer = ({
    input,
    todos,
    changeTodoInput,
    addTodo,
    toggleTodoStatus,
    removeTodo,
    clearAllTodos,
    }:Props) =>{
    //TOdos 컴포넌트에 props로 전달
    return (
        <Todos
        input={input}
        todos={todos}
        onChangeInput={changeTodoInput}
        onInsert={addTodo}
        onToggle={toggleTodoStatus}
        onRemove={removeTodo}
        onClearAll={clearAllTodos}
        />
    );
};

//스토어 상태를 props로 매핑 
//리덕스 스토어 안의 상태를 컴포넌트의 props로 넘겨주기 위해 사용하는 함수
const mapStateToProps = (state: TodoState)=> ({
    input:state.input,
    todos:state.todos,
});

//스토어 상태 변경 함수를 props로 매핑
const mapDispatchToProps = (dispatch:Dispatch)=>({
    changeTodoInput:(input:string) => {
        dispatch(changeTodoInput(input));
    },
    addTodo:(input:string)=>{
        dispatch(addTodo(input))
    },
    clearAllTodos: () => {
        dispatch(clearAllTodos());
    },
    toggleTodoStatus:(id:number) => {
        dispatch(toggleTodoStatus(id))
    },
    removeTodo:(id:number)=>{
        dispatch(removeTodo(id));
    },

    
});

//리덕스와 연동된 컴포넌트 반환

export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer)