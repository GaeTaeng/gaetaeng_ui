import React, { useState } from 'react';
import './Todo.css';
import TodoInput from './TodoInput';
import TodoListContents from './TodoList/TodoListContents';
import { Props_todo_item } from './TodoType';
type Props = {
    width?: string | number;
    height?: string | number;
  };
  
function Todo ({width, height}: Props) {
    const [li_todo, setLiTodo] = useState<Props_todo_item[]>([]);

    const handleAddTodoItem = (item:Props_todo_item) => {
        setLiTodo([...li_todo, item])
      };
    return(
    <div className="Todo">
        <TodoListContents li_todo={li_todo}/>
        <TodoInput handleAddTodoItem={handleAddTodoItem}/>
    </div>
)}

export default Todo;