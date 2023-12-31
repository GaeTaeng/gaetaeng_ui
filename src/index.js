import React, { StrictMode } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import ReactDOM from 'react-dom';
import App from './Components/App';
import reportWebVitals from './reportWebVitals';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'


import './index.css'

ReactDOM.render(
  <StrictMode>
      <RecoilRoot> {/* RecoilRoot provider를 이용하여 recoil을 사용가능하도록 설정해줍니다. */}
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Router>
            <App />
          </Router>
        </LocalizationProvider>
      </RecoilRoot>
    </StrictMode>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
