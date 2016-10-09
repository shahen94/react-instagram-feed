import { Provider } from 'react-redux';
import { Routes } from './routes';
import ReactDOM from 'react-dom';
import React from 'react';
import store from './store';
import 'normalize.css';
import '../styles/main.styl';

export function bootstrap() {
  ReactDOM.render(
    <Provider store={store}>
      {Routes}
    </Provider>,
    document.getElementById('root')
  );
}
