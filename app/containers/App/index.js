import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { configureStore } from '../../store/configureStore';
import AppComponent from '../../components/App';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppComponent />
      </Provider>
    );
  }
};

export default App;
