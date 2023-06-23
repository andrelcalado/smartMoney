import {StyleSheet} from 'react-native';
import Colors from '../../../styles/colors';

export const styles = StyleSheet.create({
  dropdownField: {
    flexDirection: 'row',
    paddingLeft: 15,
    paddingRight: 10,
    borderColor: Colors.white,
    paddingVertical: 10,
    borderRadius: 11,
    borderWidth: 1,
  },
  dropdownLabel: {
    color: Colors.white,
  },
  arrowIcon: {
    color: Colors.white,
    marginLeft: 5,
  },
});
