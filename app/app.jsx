import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';
import 'bootstrap/dist/css/bootstrap.css';

import Deskmask from './components/Deskmark';


const app = document.createElement('div');
document.body.appendChild(app);
ReactDOM.render(<Deskmask />, app);
