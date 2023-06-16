import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {API} from '@aws-amplify/api';
import {styles} from './styles';
import FeatureBall from '../../Core/FeatureBall';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function EntryListItem({navigation}) {
  const [entryList, setEntryList] = useState([
    {
      id: 0,
      description: 'Testando',
      amount: 500,
      date: '27/8 12:21',
      address: 'Rua Jacira, 100',
    },
    {
      id: 1,
      description: 'Testando',
      amount: 500,
      date: '27/8 12:21',
      address: 'Rua Jacira, 100',
    },
    {
      id: 2,
      description: 'Testando',
      amount: 500,
      date: '27/8 12:21',
      address: 'Rua Jacira, 100',
    },
  ]);

  useEffect(() => {
    API.get('CategoryAPI', '/entry/amout').then(res => {
      setEntryList(res);
    });
  }, []);

  return (
    <View>
      <FlatList
        data={entryList}
        key={item => item.id}
        renderItem={({item, index}) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('NewEntry', {currEntry: item});
            }}>
            <View style={styles.featureLine}>
              <FeatureBall last={index + 1 >= entryList.length} />

              <View style={styles.lineInfos}>
                <Text style={styles.descLabel}>{item.description}</Text>

                <View style={styles.bottomInfos}>
                  <Icon name="access-time" style={styles.infoIcon} />
                  <Text style={styles.bottomInfo}>{item.date}</Text>

                  {item.address && (
                    <>
                      <Icon name="place" style={styles.infoIcon} />
                      <Text style={styles.bottomInfo}>{item.address}</Text>
                    </>
                  )}
                </View>
              </View>

              <Text style={styles.lineAmount}>${item.amount}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
