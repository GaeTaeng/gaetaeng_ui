import { Box } from '@mui/material';
import React from 'react'
import { Props_todo_item } from '../TodoType';

function TodoItem({contents} :Props_todo_item ) {
    return (
        <Box
        className="Todo_Item">
            {contents}
        </Box>
    )
}

export default TodoItem;