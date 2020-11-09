import React, { Props } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import combinedReducers from '../store/reducers';

const ProviderWrap: React.FunctionComponent<Props<any>> = ({ element }: any) => {
  const store = createStore(combinedReducers, {});
  return <Provider store={store}>{element}</Provider>;
};

export default ProviderWrap;
