import * as React from 'react';
import * as ReactNativeScript from 'react-nativescript';
import { Provider } from 'react-redux';
import { store } from './store';
import { MainStack } from './components/MainStack';

// Controls react-nativescript log verbosity.
// - true: all logs;
// - false: only error logs.
Object.defineProperty(global, '__DEV__', { value: false });

const RootComponent = () => (
  <Provider store={store}>
    <MainStack />
  </Provider>
);

ReactNativeScript.start(React.createElement(RootComponent, {}, null));