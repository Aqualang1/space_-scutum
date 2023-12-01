import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import { store } from './app/store';
import { Provider } from 'react-redux';
import App from './components/app/App';
import { createStore } from 'redux'
import rootReducer from './reducers'

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = createStore(rootReducer);

root.render(
    <Provider store={store}>
      <App />
    </Provider>
  );