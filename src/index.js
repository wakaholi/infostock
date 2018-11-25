import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import { InfoStock } from './InfoStock';
import './css/main.css';
import WebFont from 'webfontloader';

WebFont.load({
  google: {families: ["Sawarabi Mincho", "Chewy"]}
});

ReactDOM.render(
  <InfoStock />,document.getElementById('root')
);
