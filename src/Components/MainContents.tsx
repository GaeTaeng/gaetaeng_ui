
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import React from 'react';
import './App.css';
import Header from './Header/Header';
import AppRoutes from './route/AppRoutes';

function MainContents() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>

      <div className='App-contents'>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{backgroundColor : "#f4f7fa"/*"RGB(0, 66, 0)"*/}}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, color:"#212121", fontSize:24, fontWeight:"bold" }}>
              메뉴명 TEST
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>

        <AppRoutes />

      </div>
    </div>
  );
}

export default MainContents;
