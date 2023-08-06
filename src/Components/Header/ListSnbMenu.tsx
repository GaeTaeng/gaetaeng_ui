import SendIcon from '@mui/icons-material/Send';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import * as React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

export default function ListSnbMenu() {
    const LI_MENU = [
        {
            name : "Profile",
            url : "/profile",
            icon : <PersonIcon />
        },
        {
            name : "TODO",
            url : "/todo",
            icon : <CalendarMonthIcon />
        }
    ]

  const [open, setOpen] = React.useState(true);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
  ) => {
    setSelectedIndex(index);
  };
  return (
    <List
    className='SNB-header'
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Menu
        </ListSubheader>
      }
    >
        {
            LI_MENU.map((item, idx) => {
                return <ListItemButton
                            key={`menu_${idx}`}
                            selected={selectedIndex === idx}
                            onClick={(event) => handleListItemClick(event, idx)}
                        >
                            <ListItemIcon>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.name} />
                        </ListItemButton>
            })
        }
    </List>
  );
}