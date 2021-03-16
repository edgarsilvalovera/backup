import React from 'react';
import ReactDOM from 'react-dom';
//import PrimeraApp from './PrimeraApp';
import CounterApp from './CounterApp';

import './index.css';


/*
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
*/

//const saludo = <h1>Hola Mundo</h1>;
const divRoot = document.querySelector("#root");
//ReactDOM.render(saludo , divRoot);

//ReactDOM.render(<PrimeraApp saludo='Saludo desde Index.js'/> , divRoot);
ReactDOM.render(<CounterApp value={1520}/> , divRoot);

/*
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
*/
