import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';

import { BrowserRouter } from 'react-router-dom';

import createStore from './createStore';
import manageBand from './reducers/manageBand'; //the reducer that tracks piece of state


const store = createStore(manageBand);

function render(){
  ReactDOM.render(
    <BrowserRouter>
    <App store = { store }/>
    </BrowserRouter>,
     document.getElementById('root')
  );
}
registerServiceWorker();

export const renderer = { render: render };

store.dispatch({ type: 'start' });
