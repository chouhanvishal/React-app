// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <p>this is paragraph</p>
// );

// reportWebVitals();


import React, { createElement } from 'react';
import ReactDOM from 'react-dom/client';
import Car from './Car.js';
import App from './App.js'


const test= 'test'
const myElement = React.createElement('marquee', {test}, 'I do not use JSX!');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    myElement
);
