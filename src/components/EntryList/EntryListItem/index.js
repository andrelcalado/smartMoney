import React from 'react';
import { View, Text, FlatList, Button } from 'react-native';

export default function EntryListItem({ navigation, entryList, }) {
    return (
        <View>
            <Text
                style={{ fontSize: 22, fontWeight: "bold", marginTop: 10, marginBottom: 10 }}>
                Últimos Lançamentos
            </Text>

            <FlatList
                data={entryList}

                renderItem={({ item }) =>
                    <View>
                        <Text>{item.id} - {item.description} - R$ {item.amount}</Text>
                        <Button title={'e'} onPress={()=> {
                            navigation.navigate('NewEntry', {currEntry: item});
                        }} />
                    </View>
                }></FlatList>
        </View>
    )
}
