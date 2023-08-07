
import { FaPen } from 'react-icons/fa';
import React, { useState } from 'react'
import { Props_todo_item } from './TodoType';

type Props = { 
    handleAddTodoItem : any;
  }
function TodoInput({handleAddTodoItem}:Props) {
    const [item, setItem] = useState<Props_todo_item>()

    const [title, setTitle] = useState<string>('');
    const [contents, setContents] = useState<string>('');
    const addTodo = () => {
        handleAddTodoItem({title : title, contents : contents})
        setTitle('')
        setContents('')
    }

    const handleChangeTodoTitle = (event : React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    }
    const handleChangeTodoContents = (event : React.ChangeEvent<HTMLInputElement>) => {
        setContents(event.target.value)
    }
    return (
        <div className="Todo_Input">
            <input
                type='text'
                className='TodoInput-Input'
                placeholder='제목을 입력해보세요!'
                value={title}
                onChange={handleChangeTodoTitle}
            />
            <FaPen className='TodoInput-Button' onClick={addTodo} />
            
            <input
                type='text'
                className='TodoInput-Input'
                placeholder='내용을 입력해보세요!'
                value={contents}
                onChange={handleChangeTodoContents}
            />
            <FaPen className='TodoInput-Button' onClick={addTodo} />
        </div>
    )
}

export default TodoInput;