import React, {useState} from 'react';
import {ScrollView, View} from 'react-native';
import EntrySummary from '../../components/EntrySummary';
import DropdownButton from '../../components/Core/DropdownButton';
import EntryList from '../../components/EntryList';
import FooterActions from '../../components/FooterActions';
import BalancePanelLabel from '../../components/BalancePanel/BalancePanelLabel';
import Dropdown from '../../components/Dropdown';
import {styles} from './styles';

export default function Report({navigation}) {
  const [daysFilter, setDaysFilter] = useState(7);
  const [daysFilterModal, setDaysFilterModal] = useState(false);
  const relativeDays = [1, 3, 7, 15, 21, 30, 45, 60, 90, 180, 365];
  const [categoryFilter, setCategoryFilter] = useState();
  const [categoryFilterModal, setCategoryFilterModal] = useState(false);

  const returnS = () => {
    return daysFilter > 1 ? 's' : '';
  };

  return (
    <View>
      <BalancePanelLabel newEntry />

      <View style={styles.filtersContainer}>
        <DropdownButton
          label={`Último${returnS()} ${daysFilter} dia${returnS()}`}
          onPress={() => setDaysFilterModal(true)}
        />
        <Dropdown
          unitLabel="dias"
          data={relativeDays}
          onChange={setDaysFilter}
          visible={daysFilterModal}
          setVisible={setDaysFilterModal}
        />

        <DropdownButton
          label={categoryFilter ? categoryFilter : 'Category'}
          onPress={() => setCategoryFilterModal(true)}
        />
      </View>

      <EntrySummary />

      <EntryList days={daysFilter} />

      <FooterActions
        onSubmit={() => {}}
        submitLabel="Salvar"
        onCancel={() => {
          navigation.goBack();
        }}
      />
    </View>
  );
}
