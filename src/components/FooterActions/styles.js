import {StyleSheet} from 'react-native';
import Colors from '../../styles/colors';

export const styles = StyleSheet.create({
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 30,
  },
  submitButton: {
    borderWidth: 2,
    marginRight: 10,
    borderRadius: 40,
    borderColor: Colors.turqueseDark,
    paddingVertical: 10,
    paddingHorizontal: 45,
  },
  cancelButton: {
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  labelSubmit: {
    color: Colors.turqueseDark,
    fontSize: 20,
    fontWeight: '500',
  },
  disabledButton: {
    borderColor: Colors.metalDark,
  },
  disabledButtonLabel: {
    color: Colors.metalDark,
  },
  buttonLabel: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: '400',
  },
});
