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
  labelEntry: {
    fontSize: 14,
    marginTop: 50,
    marginBottom: 10,
    color: Colors.white,
    fontWeight: '500',
  },
  value: {
    fontSize: 60,
    color: Colors.white,
    fontWeight: '300',
  },
  valueEntry: {
    fontSize: 45,
    color: Colors.white,
    fontWeight: '200',
  },
  container: {
    alignItems: 'center',
    paddingBottom: 50,
  },
  amountContainer: {
    paddingVertical: 7,
    paddingHorizontal: 30,
    borderRadius: 15,
    marginBottom: 50,
  },
});
