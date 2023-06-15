/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Routes from './src/routes';
import {View} from 'react-native';
import Colors from './src/styles/colors';

const App = () => {
  return (
    <View style={{backgroundColor: Colors.background, height: '100%'}}>
      <Routes />
    </View>
  );
};

export default App;
