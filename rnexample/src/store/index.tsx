import {ReactNode} from 'react';
import {Provider} from 'react-redux';
import {formReducer} from './form/formReducer';
import {configureStore} from '@reduxjs/toolkit';

const clientStore = configureStore({
  reducer: formReducer,
});

const ReduxProvider = ({children}: {children: ReactNode}) => {
  return <Provider store={clientStore}>{children}</Provider>;
};

export default ReduxProvider;
