import { applyMiddleware, createStore, compose } from 'redux';

import thunk from 'redux-thunk';

import reducer from './reducers';

const initialStateFromLocalStorage = JSON.parse(window.localStorage.getItem('state'));

let args = [
  reducer, 
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__  ?  window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
  )
];

if(initialStateFromLocalStorage) {
  args = [
    args[0],
    initialStateFromLocalStorage,
    args[1]
  ];
}

const store = createStore(...args);

export default store;
