import React from 'react'
import TodoListManagement from './TodoListManagement';
import { Props_li_todo } from '../TodoType';


  
function TodoListContents({li_todo} : Props_li_todo) {
    const ing_li_todo = li_todo.filter(todo => !todo.is_complete)
    const complete_li_todo = li_todo.filter(todo => todo.is_complete)
    return (
        <div className="Todo-List-Contents">

            <div className="Todo-List-Title">진행 중</div>
            <div className="Todo-List-Management">
                <TodoListManagement li_todo={ing_li_todo}/>
            </div>

            <div className="Todo-List-Title">완료</div>
            <div className="Todo-List-Management">
                <TodoListManagement li_todo={complete_li_todo}/>
            </div>
        </div>
    )
}

export default TodoListContents;