import { Box } from '@mui/material';
import React, { useState } from 'react';
import './Todo.css';
import TodoInput from './TodoInput';
import TodoListContents from './TodoList/TodoListContents';
import { Props_li_todo } from './TodoType';
type Props = {
    width?: string | number;
    height?: string | number;
  };
  
function Todo ({width, height}: Props) {
    const [li_todo, setLiTodo] = useState<Props_li_todo[]>([{},{},{},{}]);
    return(
    <div className="Todo">
        <TodoListContents li_todo={li_todo}/>
        <TodoInput />
    </div>
)}

export default Todo;