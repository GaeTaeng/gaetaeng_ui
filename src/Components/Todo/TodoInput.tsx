
import { FaPen } from 'react-icons/fa';
import React, { useState } from 'react'
import { Props_todo_item } from './TodoType';
import { useRecoilState } from 'recoil';
import { TodoSqeuenceState, TodoState } from '../../States/TodoState';
import dayjs from 'dayjs';

type Props = { 
    handleAddTodoItem : any;
  }
function TodoInput() {
    const [li_todo, setLiTodo] = useRecoilState<Props_todo_item[]>(TodoState);
    const [todoSequence, setTodoSequence] = useRecoilState<number>(TodoSqeuenceState);

    const [title, setTitle] = useState<string>('');
    const [contents, setContents] = useState<string>('');
    const [deadline, setDeadLine] = useState<Date>(new Date());



    const handleAddTodoItem = (item:Props_todo_item) => {

        function compareNumbers(a : Props_todo_item, b : Props_todo_item){
            return dayjs(a.deadline).diff(b.deadline);
        }


        setLiTodo([...li_todo, item].sort(compareNumbers))
      };


    const addTodo = () => {
        handleAddTodoItem({id : todoSequence,title : title, contents : contents, deadline : deadline, is_complete : false})
        setTitle('')
        setContents('')
        setTodoSequence(todoSequence+1)
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