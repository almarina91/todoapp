import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import { store } from "./store";


const createdStore = store();

//ceo app wrap-uj sa provider hook-om i zadaj mu da napravi store
ReactDOM.render(
  <React.StrictMode>
      <Provider store={createdStore}>
            <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
