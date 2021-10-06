/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Routes from './src/routes';
import { withAuthenticator } from 'aws-amplify-react-native';
import BalancePanel from './src/components/BalancePanel';
import EntrySummary from './src/components/EntrySummary';
import EntryList from './src/components/EntryList';
import Report from './src/pages/Report';

import NewEntry from './src/pages/newEntry';
import {
  StyleSheet,
  View,
} from 'react-native';

const App = () => {

  return (
    <View>
      <Routes />

    </View>

  )
};

const styles = StyleSheet.create({

});

export default App;
