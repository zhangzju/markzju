import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';
import './static/style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import Deskmask from './components/Deskmark';


const app = document.createElement('div');
document.body.appendChild(app);
ReactDOM.render(<Deskmask />, app);
