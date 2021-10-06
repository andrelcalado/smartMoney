import React from 'react';
import { View, Text } from 'react-native';

import EntrySummaryChart from './EntrySummaryChart';
import EntrySummaryList from './EntrySummaryList';

export default function EntrySummary() {

    return (
        <View>
            <Text
                style={{ fontSize: 22, fontWeight: "bold", marginTop: 10, marginBottom: 10 }}>
                Categorias
            </Text>

            <EntrySummaryChart/>
            <EntrySummaryList/>
        </View>
    )
}
