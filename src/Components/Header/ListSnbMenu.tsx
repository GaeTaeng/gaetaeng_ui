import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import * as React from 'react';
import { useNavigate } from 'react-router';
import { LI_MENU } from './HEADER_ENUM';

type Props = {
  selectedIndex : number;
  setSelectedIndex : any;
}
export default function ListSnbMenu({selectedIndex, setSelectedIndex} : Props) {


  const navigate = useNavigate();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
  ) => {
    setSelectedIndex(index);

    navigate(LI_MENU[index].url, {
      state: {
        mn_idx: index
      }
    });
    
  };
  return (
    <List
    className='SNB-header'
      sx={{ width: 325, maxWidth: 325, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader 
        sx={{ height : 61}}
        component="div" id="nested-list-subheader">
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