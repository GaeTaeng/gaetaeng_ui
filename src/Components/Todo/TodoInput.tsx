
import dayjs from 'dayjs';
import React, { useState } from 'react';
import { FaPen } from 'react-icons/fa';
import { useRecoilState } from 'recoil';
import { TodoSqeuenceState, TodoState } from '../../States/TodoState';
import { Props_todo_item } from './TodoType';

import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';

import TextField from '@mui/material/TextField';

function TodoInput() {
    const [li_todo, setLiTodo] = useRecoilState<Props_todo_item[]>(TodoState);
    const [todoSequence, setTodoSequence] = useRecoilState<number>(TodoSqeuenceState);

    const [title, setTitle] = useState<string>('');
    const [contents, setContents] = useState<string>('');
    const [deadline, setDeadLine] = useState<Date | null>(new Date());



    const handleAddTodoItem = (item:Props_todo_item) => {

        function compareNumbers(a : Props_todo_item, b : Props_todo_item){
            return dayjs(a.deadline).diff(b.deadline);
        }


        setLiTodo([...li_todo, item].sort(compareNumbers))
      };


    const addTodo = () => {
        if(!deadline) return;
        handleAddTodoItem({id : todoSequence,title : title, contents : contents, deadline : deadline, is_complete : false})
        setTitle('')
        setContents('')
        setTodoSequence(todoSequence+1)
    }
    const handleOnKeyUp = (event : React.KeyboardEvent<HTMLInputElement>) => {
        if(event.key === 'Enter') {
            addTodo();
        }   

    }
    const handleChangeTodoDate = (value: dayjs.Dayjs) => {
        if(!value.isValid()) {
            setDeadLine(null)
        }else {
            setDeadLine(value.toDate())
        }
    }
    const handleChangeTodoTitle = (event : React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    }
    const handleChangeTodoContents = (event : React.ChangeEvent<HTMLInputElement>) => {
        setContents(event.target.value)
    }
    return (
        <div className="Todo_Input">
        <DemoContainer components={['DatePicker']}> 
            <DatePicker 
            label="기한"  
            sx={{width : "200px"}}
            defaultValue={dayjs(deadline)} onChange={handleChangeTodoDate} 
            format='YYYY/MM/DD'
            />
            

            <TextField className='TodoInput-Input-Title'
                sx={{width : "30%"}}
                value={title}
                id="outlined-helperText"
                label="제목" 
                onChange={handleChangeTodoTitle}
                onKeyUp={handleOnKeyUp} />
            <TextField className='TodoInput-Input-Contents'
                sx={{width : "30%"}}
                value={contents}
                id="outlined-helperText"
                    label="내용" 
                    onChange={handleChangeTodoContents}
                    onKeyUp={handleOnKeyUp} />
                    <FaPen className='TodoInput-Button' onClick={addTodo} />
      </DemoContainer>
        </div>
    )
}

export default TodoInput;