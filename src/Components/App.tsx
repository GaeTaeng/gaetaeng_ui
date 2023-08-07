
import React from 'react';
import './App.css';
import AppRoutes from './route/AppRoutes';
import Header from './Header/Header';

import recoil_icon from '../Resource/recoil_icon.png'
import mui_icon from '../Resource/mui_icon.png'
import react_icon from '../Resource/react_icon.png'
import ts_icon from '../Resource/ts_icon.png'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>

      <img src={react_icon} style={{height : "60px", float:"left"}}/>
      <img src={ts_icon} style={{height : "60px", float:"left"}}/>
      <img src={mui_icon} style={{height : "60px", float:"left"}}/>
      <img src={recoil_icon} style={{height : "60px", float:"left"}}/>
      <div className='App-contents'>
        <AppRoutes />

      </div>
    </div>
  );
}

export default App;
