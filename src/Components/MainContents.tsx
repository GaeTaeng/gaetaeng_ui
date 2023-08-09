
import { Typography } from '@mui/material';
import React from 'react';
import './App.css';
import Header from './Header/Header';
import AppRoutes from './route/AppRoutes';
import SkillStackList from './SkillStackList';

function MainContents() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>

      <div className='App-contents'>
      <Typography variant="h6" component="div" sx={{flexGrow: 1, color:"#212121", fontSize:24,  paddingRight:"30px", borderBottom:"1px solid ghostwhite", width:"100%"}}>
          메뉴명 TEST
        </Typography>
        <AppRoutes />
      </div>
        <SkillStackList />
    </div>
  );
}

export default MainContents;
