import React from 'react';
import { Props_li_todo } from '../TodoType';
import TodoItem from './TodoItem';

import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';

import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


function TodoListManagement({li_todo} : Props_li_todo) {


    return (
        <div className="">
        <Stack direction="row" spacing={2}
            divider={<Divider orientation="vertical" flexItem />}>
            {
                li_todo?.map((item, idx) => {
                    return <Item key={`todo_item_${idx}`}> <TodoItem {...item}/> </Item>;
                })
            }
            
      </Stack>
        </div>
    )
}

export default TodoListManagement;