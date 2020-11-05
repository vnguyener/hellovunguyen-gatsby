import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import combinedReducers from '../store/reducers';

export default ({ element }) => {
  const store = createStore(combinedReducers, {});
  return <Provider store={store}>{element}</Provider>;
};
