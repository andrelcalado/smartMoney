import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import Colors from '../../styles/colors';

import BalancePanel from '../../components/BalancePanel';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {styles} from './styles';

const Main = ({navigation}) => {
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
