import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import { API } from '@aws-amplify/api';

import Colors from '../../../styles/colors';

export default function EntryListItem({ navigation }) {
    const [entryList, setEntryList] = React.useState();

    useEffect(() => {
        console.log('Hey, ho');
        API.get('CategoryAPI', '/entry/amout').then(res => {
            setEntryList(res);
        });
    }, []);

    return (
        <View>
           
            <FlatList
                data={entryList}
                key={item => item.id}
                renderItem={({ item }) =>
                    <View>
                        <Text>{item.id} - {item.description} - R$ {item.amount}</Text>
                        <Button title={'e'} onPress={() => {
                            navigation.navigate('NewEntry', { currEntry: item });
                        }} />
                    </View>
                }></FlatList>
        </View>
    )
}

