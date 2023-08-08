import React, { useState } from 'react';
import './Todo.css';
import TodoInput from './TodoInput';
import TodoListContents from './TodoList/TodoListContents';
import { Props_todo_item } from './TodoType';


import { useRecoilState } from 'recoil';
import { TodoState } from '../../States/TodoState';
import SkillStackList from '../SkillStackList';

type Props = {
    width?: string | number;
    height?: string | number;
  };
  
function Todo ({width, height}: Props) {
    const [li_todo, setLiTodo] = useRecoilState<Props_todo_item[]>(TodoState);
    
    const handleReset = () => {
        setLiTodo([]);
    }

    return(
    <div className="Todo"> 
        <SkillStackList />
        <button onClick={handleReset}> 초기화 </button>
        <TodoListContents li_todo={li_todo} />
        <TodoInput/>
    </div>
)}

export default Todo;