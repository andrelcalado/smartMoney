import {StyleSheet} from 'react-native';
import Colors from '../../../styles/colors';

export const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    marginTop: 20,
    marginBottom: 5,
    color: Colors.white,
    fontWeight: '500',
  },
  value: {
    fontSize: 60,
    color: Colors.white,
    fontWeight: '300',
  },
  container: {
    alignItems: 'center',
    paddingBottom: 50,
  },
});
