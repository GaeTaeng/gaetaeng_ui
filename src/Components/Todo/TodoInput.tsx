
import { FaPen } from 'react-icons/fa';
import React, { useState } from 'react'
import { Props_todo_item } from './TodoType';

type Props = { 
    handleAddTodoItem : any;
  }
function TodoInput({handleAddTodoItem}:Props) {
    const [item, setItem] = useState<Props_todo_item>()
    const [contents, setContents] = useState<string>('');
    const addTodo = () => {
        handleAddTodoItem({contents : contents})
        setContents('')
    }

    const handleChangeTodoContents = (event : React.ChangeEvent<HTMLInputElement>) => {
        setContents(event.target.value)
    }
    return (
        <div className="Todo_Input">
            <input
                type='text'
                className='TodoInput-Input'
                placeholder='Todo를 입력해보세요!'
                value={contents}
                onChange={handleChangeTodoContents}
            />
            <FaPen className='TodoInput-Button' onClick={addTodo} />
        </div>
    )
}

export default TodoInput;