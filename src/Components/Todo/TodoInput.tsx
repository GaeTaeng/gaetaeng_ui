
import { FaPen } from 'react-icons/fa';
import React from 'react'

function TodoInput() {
    const addTodo = () => {

    }
    return (
        <div className="Todo_Input">
            <input
                type='text'
                className='TodoInput-Input'
                placeholder='Todo를 입력해보세요!'
            />
            <FaPen className='TodoInput-Button' onClick={addTodo} />
        </div>
    )
}

export default TodoInput;