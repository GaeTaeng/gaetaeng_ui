
import React from 'react'
import { Props_todo_item } from '../TodoType';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useRecoilState } from 'recoil';
import { TodoState } from '../../../States/TodoState';


function TodoItem({title, contents} :Props_todo_item ) {
    const [li_todo, setLiTodo] = useRecoilState(TodoState);

    return (
        <Box sx={{ minWidth: 275, maxWidth : 275 }}
        className="Todo_Item"
        >
        <Card variant="outlined">
          <CardContent>
            <Typography sx={{ fontSize: 14, height: 21 }} color="text.secondary" gutterBottom>
                Word of the Day
            </Typography>
            <Typography sx={{ height: 30 }} variant="h5" component="div">
                {title}
            </Typography>
            <Typography sx={{ height: 24, mb: 1.5 }} color="text.secondary">
                adjective
            </Typography>
            <Typography sx={{ height: 25 }} variant="body2">
               {contents}
            </Typography>
            </CardContent>
            <CardActions>
            <Button size="small">완료</Button>
            <Button size="small">수정</Button>
            <Button size="small">삭제</Button>
            </CardActions>
            </Card>
        </Box>
    )
}


export default TodoItem;