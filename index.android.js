/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import App from './app/containers/App';
import { AppRegistry } from 'react-native';

class ReactNativeProject extends Component {
  render() {
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('ReactNativeProject', () => ReactNativeProject);
