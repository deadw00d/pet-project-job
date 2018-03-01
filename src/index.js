import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './view/App';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from "redux";
import rootReducer from "./reducers/mainReducer";
import Immutable from 'immutable';
import { Provider } from 'react-redux';

const initialState = {
  main: Immutable.fromJS({
    showDay: false,
    showMonth: false,
    showYear: false,
    date: new Date()
  })
}

const store = createStore(rootReducer, initialState)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
