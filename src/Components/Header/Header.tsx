import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react';

import { useLocation } from 'react-router';
import './Header.css';
import { LI_MENU } from './HEADER_ENUM';
import ListSnbMenu from './ListSnbMenu';
import { useRecoilState } from 'recoil';
import { HeaderSnbState } from '../../States/MainState';
export default function Header() {

  const location = useLocation();

  useEffect(() => {
    LI_MENU.forEach((item, idx) => {
      if(location.pathname === item.url) {
        setSelectedIndex(idx)
      }

    })
  }, [ location ])


  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  
  const [isFoldSnb, setIsFoldSnb] = useRecoilState<boolean>(HeaderSnbState);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLogin = () => {
    setAnchorEl(null);
    setAuth(!auth);
  }; 
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* <FormGroup>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1, color:"#212121", fontSize:24, fontWeight:"bold", padding : "6px", textAlign:"left"}}>
            GAETAENG
          </Typography>
      </FormGroup> */}
      <AppBar position="static" sx={{backgroundColor : "white"/*"RGB(0, 66, 0)"*/}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="default"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setIsFoldSnb(!isFoldSnb)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color:"#212121", fontSize:24, fontWeight:"bold" }}>
            GAETAENG
          </Typography>
          <div>
            <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="default"
            >
            <AccountCircle />
            </IconButton>
            <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            >
            {auth && <MenuItem onClick={handleClose}>Profile</MenuItem>}
            {auth && <MenuItem onClick={handleClose}>My account</MenuItem>}
            <MenuItem onClick={handleLogin}>{auth ? "Logout" : "Login"}</MenuItem>
            </Menu>
        </div>
        </Toolbar>
      </AppBar>

      <div className={`SNB ${isFoldSnb ? "hide" : ""}`}>
        <ListSnbMenu selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}/>

      </div>
    </Box>
  );
}
