import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../../styles/colors';

export default function Container({ title, actionLabel, actionButtonText, onPressActionButton, children }) {
    return (
        <View style={styles.summaryContainer}>
            { title && (<Text style={styles.title}> {title} </Text>)}

            {children}

            {(actionLabel || actionButtonText) && (
                <View style={styles.actionContainer}>
                    {actionLabel && (
                        <Text style={styles.actionLabel}>{actionLabel}</Text>
                    )}
                    {actionButtonText && (
                        <TouchableOpacity onPress={onPressActionButton} style={styles.actionButtonContainer}>
                            <Icon name="insert-chart" style={styles.actionButtonIcon} />

                            <Text style={styles.actionButtonText}>{actionButtonText}</Text>
                        </TouchableOpacity>
                    )}
                </View>
            )}


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
        flexDirection: 'row',
    },
    summaryContainer: {
        backgroundColor: Colors.asphalt,
        margin: 5,
        padding: 10,
        borderRadius: 7,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.2)',
    },
    actionLabel: {
        flex: 1,
        fontSize: 15,
        color: Colors.white,
    },
    actionButtonContainer: {
        flexDirection: 'row',
    },
    actionButtonIcon: {
        color: "#fff",
        margin: 3,
        fontSize: 25,
    },
    actionButtonText: {
        marginTop: 5,
        color: '#fff',
    }
})
