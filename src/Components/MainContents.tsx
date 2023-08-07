
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
      <SkillStackList />

      <div className='App-contents'>
        <AppRoutes />

      </div>
    </div>
  );
}

export default MainContents;
