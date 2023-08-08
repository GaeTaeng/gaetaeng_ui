import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Switch from '@mui/material/Switch';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react';

import { LI_MENU } from './HEADER_ENUM';
import './Header.css';
import ListSnbMenu from './ListSnbMenu';
import { useLocation } from 'react-router';
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

  const [is_fold, setIsFold] = useState<boolean>(false)

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
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={auth}
              onChange={handleChange}
              aria-label="login switch"
            />
          }
          label={auth ? 'Logout' : 'Login'}
        />
      </FormGroup>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setIsFold(!is_fold)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {LI_MENU[selectedIndex].name}
          </Typography>
          <div>
            <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
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

      <div className={`SNB ${is_fold ? "hide" : ""}`}>
        <ListSnbMenu selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}/>

      </div>
    </Box>
  );
}
