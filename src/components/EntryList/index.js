import React from 'react';

import EntryListItem from './EntryListItem';
import Container from '../Core/Container';

export default function EntryList({navigation}) {
  return (
    <Container
      title="Últimos Lançamentos"
      actionLabel="Últimos 7 Dias"
      actionButtonText="Ver mais"
      onPressActionButton={() => {
        console.log('vsf 2');
      }}>
      <EntryListItem navigation={navigation} />
    </Container>
  );
}
