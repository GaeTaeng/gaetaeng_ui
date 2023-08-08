
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
        <AppRoutes />

      </div>
    </div>
  );
}

export default MainContents;
