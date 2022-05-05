import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import board from './board';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default combineReducers({ alert, auth, board });
