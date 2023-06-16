import React from 'react';

import EntryListItem from './EntryListItem';
import Container from '../Core/Container';

export default function EntryList({navigation, onPressActionButton}) {
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
