import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import { withStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import './index.css';
import axios from 'axios';
import { InfoStock } from './InfoStock'
import main from './css/main.css'
import WebFont from 'webfontloader';

WebFont.load({
  google: {families: ["Sawarabi Mincho"]}
});

ReactDOM.render(
  <InfoStock />,document.getElementById('root')
);
