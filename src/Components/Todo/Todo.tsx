import React, { useState } from 'react';
import './Todo.css';
import TodoInput from './TodoInput';
import TodoListContents from './TodoList/TodoListContents';
import { Props_todo_item } from './TodoType';


import { useRecoilState } from 'recoil';
import { TodoState } from '../../States/TodoState';

type Props = {
    width?: string | number;
    height?: string | number;
  };
  
function Todo ({width, height}: Props) {
    const [li_todo, setLiTodo] = useRecoilState<Props_todo_item[]>(TodoState);

    return(
    <div className="Todo">
      Recoil 공부목적
        <TodoListContents li_todo={li_todo} />
        <TodoInput/>
    </div>
)}

export default Todo;