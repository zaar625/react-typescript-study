import React,{createContext} from "react";
import { Todo } from "../App";

interface TodoState {
    readonly todos: Todo[];
    readonly input:string;
}

interface TodoAction {
    readonly setTodos:(todos:Todo[])=> void;
    readonly onInsert:(text:string)=> void;
    readonly inRemove:(id:number)=> void;
    readonly onToggle:(id:number) => void;
    readonly onClearAll:() => void;
    readonly onChange:(e:React.ChangeEvent<HTMLInputElement>) => void;
    readonly onSubmit:(e:React.FormEvent<HTMLFormElement>) => void;
}

interface Context {
    readonly state: TodoState;
    readonly actions: TodoAction;
}

const TodoContext = createContext<Context>({
    state: {todos:[], input:''},
    actions:{
        setTodos:(todos:Todo[]):void => {},
        onInsert:(text:string):void => {},
        inRemove:(id:number):void => {},
        onToggle:(id:number):void => {},
        onChange:(e:React.ChangeEvent<HTMLInputElement>):void => {},
        onClearAll:():void => {},
        onSubmit:(e:React.FormEvent<HTMLFormElement>):void => {},
    }
});

export default TodoContext;