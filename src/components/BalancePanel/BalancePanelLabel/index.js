import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../../styles/colors';

const BalancePanelLabel = ({newEntry}) => {
  const currenteBalance = 2064.35;

  return (
    <View style={styles.container}>
      <Text style={newEntry ? styles.labelEntry : styles.label}>
        Saldo atual:
      </Text>

      <LinearGradient
        style={newEntry ? styles.amountContainer : {}}
        colors={
          newEntry
            ? [Colors.violet, Colors.blue]
            : ['transparent', 'transparent']
        }>
        <Text style={newEntry ? styles.valueEntry : styles.value}>
          $ {currenteBalance}
        </Text>
      </LinearGradient>
    </View>
  );
};

export default BalancePanelLabel;
