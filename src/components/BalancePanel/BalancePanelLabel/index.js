import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../../../styles/colors';

const BalancePanelLabel = () => {
    const currenteBalance = 2064.35;
    
    return (
        <View style={styles.container}>
            <Text
                style={styles.label}>
                Saldo atual:
            </Text>
            <Text
                style={styles.value}>
                R$ {currenteBalance}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    label: {
        fontSize: 14,
        marginTop: 10,
        marginBottom: 10,
        color: Colors.white
    },
    value: {
        fontSize: 36,
        fontWeight: "bold",
        marginBottom: 10,
        color: Colors.white
    },
    container: {
        alignItems: 'center',
    },
})

export default BalancePanelLabel;
