import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import Colors from '../../styles/colors';

import EntrySummaryChart from './EntrySummaryChart';
import EntrySummaryList from './EntrySummaryList';



export default function EntrySummary() {

    return (
        <View style={styles.summaryCointainer}>
            <Text
                style={styles.title}>
                Categorias
            </Text>

            <EntrySummaryChart/>
            <EntrySummaryList/>

            <View style={styles.actionContainer}>
                <Text style={styles.actionLabel}>Últimos 7 Dias</Text>
                <TouchableOpacity>
                    <Text>Ver mais</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 22,
        fontWeight: "bold",
        color: Colors.white,

    },
    actionContainer: {
        flexDirection: 'row'
    },
    actionLabel: {
        fontSize: 15,
        color: Colors.white,
    },
    summaryCointainer: {
        backgroundColor: Colors.asphalt,
        margin: 5,
        padding: 10,
        borderRadius: 7,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.2)',
    }

});
