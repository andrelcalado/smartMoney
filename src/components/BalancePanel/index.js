import React from 'react';
import {View} from 'react-native';
import BalancePanelLabel from './BalancePanelLabel';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../styles/colors';
import {styles} from './styles';

const BalancePanel = () => {
  return (
    <View style={styles.container}>
      <LinearGradient colors={[Colors.violet, Colors.blue]}>
        <BalancePanelLabel />
      </LinearGradient>
    </View>
  );
};

export default BalancePanel;
