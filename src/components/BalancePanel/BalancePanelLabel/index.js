import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';

const BalancePanelLabel = () => {
  const currenteBalance = 2064.35;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Saldo atual:</Text>
      <Text style={styles.value}>$ {currenteBalance}</Text>
    </View>
  );
};

export default BalancePanelLabel;
