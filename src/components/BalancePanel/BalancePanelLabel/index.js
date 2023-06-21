import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../../styles/colors';
import {getEntries} from '../../../services/entry';

const BalancePanelLabel = ({newEntry}) => {
  const [currenteBalance, setCurrenteBalance] = useState(0);

  useEffect(() => {
    getEntries()
      .then(res => {
        let amount = 0;

        res.forEach(item => {
          const data = item.data();

          amount += data.amount;
        });

        setCurrenteBalance(amount.toFixed(2));
      })
      .catch(err => {
        console.log('err: ', err);
      });
  }, []);

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
