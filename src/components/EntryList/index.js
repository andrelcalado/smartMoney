import React, {useEffect} from 'react';
import {getInitCategories} from '../../services/category';

import EntryListItem from './EntryListItem';
import Container from '../Core/Container';

export default function EntryList({navigation, onPressActionButton}) {
  useEffect(() => {
    getInitCategories()
      .then(res => {
        console.log(res);
        console.log(res.length);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <Container
      title="Últimos Lançamentos"
      actionLabel="Últimos 7 Dias"
      actionButtonText="Ver mais"
      onPressActionButton={onPressActionButton}>
      <EntryListItem navigation={navigation} />
    </Container>
  );
}
