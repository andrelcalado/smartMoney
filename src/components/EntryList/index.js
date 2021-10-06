import React from 'react';
import { View } from 'react-native';

import EntryListItem from './EntryListItem';

export default function EntryList({entryList, navigation}) {
    return (
        <View>
            <EntryListItem navigation={navigation} entryList={entryList}/>
        </View>
    )
}
