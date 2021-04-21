import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';

import { store } from './store';

import Main from './containers/Main';

function App() {
  return (
    <ReduxProvider store={store}>
      <Main />
    </ReduxProvider>
  );
}

export default App;
