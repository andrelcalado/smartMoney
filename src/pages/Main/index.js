import React from 'react';
import {View, Button, TouchableOpacity, Text} from 'react-native';
import Amplify from 'aws-amplify';
// import awsconfig from '../../aws-exports';
import Colors from '../../styles/colors';

import BalancePanel from '../../components/BalancePanel';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {styles} from './styles';

// Amplify.configure(awsconfig);

const Main = ({navigation}) => {
  const [categorys, setCategorys] = React.useState([]);
  const [cateName, cateNameSet] = React.useState('');

  return (
    <View style={styles.container}>
      <BalancePanel />

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('NewEntry');
        }}
        style={styles.addEntry}>
        <Icon name="add" size={35} color={Colors.white} />
      </TouchableOpacity>

      <EntrySummary onPressActionButton={() => navigation.navigate('Report')} />

      <EntryList
        navigation={navigation}
        onPressActionButton={() => navigation.navigate('Report')}
      />
    </View>
  );
};

export default Main;
