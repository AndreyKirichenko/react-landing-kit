import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from '../../store';
import ErrorBoundary from '../ErrorBoundary';


import Page from '../Page';

store.subscribe(() => {
  const stateToPersist = JSON.stringify(store.getState());
  window.localStorage.setItem('state', stateToPersist);
});

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ErrorBoundary>
          <Page />
        </ErrorBoundary>
      </Provider>
    );
  }
}

export default App;
