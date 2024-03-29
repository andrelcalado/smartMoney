import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {getEntries} from '../../services/entry';

import EntryListItem from './EntryListItem';
import Container from '../Core/Container';
import {styles} from './styles';

export default function EntryList({navigation, days = 7, onPressActionButton}) {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    getEntries(days)
      .then(res => {
        setEntries(
          res.map(item => {
            const data = item.data();
            data.id = item.id;

            return data;
          }),
        );
      })
      .catch(err => {
        console.log(err);
      });
  }, [days]);

  return (
    <Container
      title="Últimos Lançamentos"
      actionLabel={`Últimos ${days} Dias`}
      actionButtonText="Ver mais"
      onPressActionButton={onPressActionButton}>
      <FlatList
        data={entries}
        style={styles.lastFeaturesContainer}
        renderItem={({item, index}) => (
          <EntryListItem
            entryItem={item}
            navigation={navigation}
            lastItem={index + 1 >= entries.length}
          />
        )}
      />
    </Container>
  );
}
