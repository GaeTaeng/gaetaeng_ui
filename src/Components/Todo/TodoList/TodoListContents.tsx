import React from 'react'
import TodoListManagement from './TodoListManagement';
import { Props_li_todo } from '../TodoType';


  
function TodoListContents({li_todo} : Props_li_todo) {
    return (
        <div className="Todo-List-Contents">
            
            <TodoListManagement li_todo={li_todo}/>
        </div>
    )
}

export default TodoListContents;