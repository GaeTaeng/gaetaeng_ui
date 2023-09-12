
import PersonIcon from '@mui/icons-material/Person';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import * as React from 'react';

export const LI_MENU = [
    {
        name : "Profile",
        url : "/profile",
        icon : <PersonIcon />
    },
    {
        name : "TODO",
        url : "/todo",
        icon : <CalendarMonthIcon />
    },
    {
        name : "PROJECT",
        url : "/project",
        icon : <AccountTreeIcon />
    },
    {
        name : "꼬맨틀",
        url : "/komantle",
        icon : <VideogameAssetIcon />
    }
]