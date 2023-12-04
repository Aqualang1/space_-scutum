import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import TodoList from './containers/TodoList';
import { store } from './app/store';
import { Provider } from 'react-redux';


function App() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);