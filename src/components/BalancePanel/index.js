import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import BalancePanelLabel from './BalancePanelLabel';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../styles/colors';

const BalancePanel = () => {

    return (
        <View style={styles.container}>
            <LinearGradient colors={[Colors.violet, Colors.blue]}>
                <BalancePanelLabel></BalancePanelLabel>
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    }
})

export default BalancePanel;
