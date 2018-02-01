import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducerContacts from './reducers/reducer_contacts';

let store = createStore(reducerContacts);


ReactDOM.render(
  <Provider store={store}>
    <App store={store} />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
