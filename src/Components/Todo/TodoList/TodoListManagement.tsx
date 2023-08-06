import React from 'react'
import TodoItem from './TodoItem';
import { Props_li_todo } from '../TodoType';

function TodoListManagement({li_todo} : Props_li_todo) {
    return (
        <div className="">
            {
                li_todo?.map(item => {
                    return <TodoItem />;
                })
            }
            
        </div>
    )
}

export default TodoListManagement;