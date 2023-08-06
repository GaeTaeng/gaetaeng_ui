
import React from 'react';
import './App.css';
import AppRoutes from './route/AppRoutes';
import Header from './Header/Header';

function App() {
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

export default App;
