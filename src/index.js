
import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./components";
import { Provider } from 'react-redux';
import appStore from './store';

const app = <Provider store={appStore}><App /></Provider>;

ReactDOM.render(app, document.getElementById('root'));