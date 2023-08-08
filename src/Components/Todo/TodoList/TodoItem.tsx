
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
import dayjs from 'dayjs';


function TodoItem({id,title, contents, deadline, is_complete} :Props_todo_item ) {
    const [li_todo, setLiTodo] = useRecoilState(TodoState);

    const handleToggleComplete = () => {
        const newList = li_todo.map(todo => {
            if(todo.id === id) {
                return {...todo, is_complete : !todo.is_complete}
            }

            return todo;
        })
        setLiTodo(newList);
    }
    const handleDeleteTodoItem = (event: React.MouseEvent<HTMLElement>) => {
        const newList = li_todo.filter(todo => todo.id && todo.id !== id)
        setLiTodo(newList);
    }
    return (
        <Box sx={{ minWidth: 275, maxWidth : 275 }}
        className="Todo_Item"
        >
        <Card variant="outlined">
          <CardContent>
            <Typography sx={{ fontSize: 14, height: 21 }} color="text.secondary" gutterBottom>
                할일
            </Typography>
            <Typography sx={{ height: 30 }} variant="h5" component="div">
                {title}
            </Typography>
            <Typography sx={{ height: 24, mb: 1.5 }} color="text.secondary">
                {contents} 
            </Typography>
            <Typography sx={{ height: 25 }} variant="body2">
               {deadline && `~${dayjs(deadline).format("YYYY.MM.DD")}`}
            </Typography>
            </CardContent>
            <CardActions>
            <Button size="small" onClick={handleToggleComplete}>{is_complete ? "진행 중" : "완료"}</Button>
            <Button size="small">수정</Button>
            <Button size="small" onClick={handleDeleteTodoItem}>삭제</Button>
            </CardActions>
            </Card>
        </Box>
    )
}


export default TodoItem;