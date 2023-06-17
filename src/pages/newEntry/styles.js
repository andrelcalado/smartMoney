import {StyleSheet} from 'react-native';
import Colors from '../../styles/colors';

export const styles = StyleSheet.create({
  input: {
    width: '80%',
    alignSelf: 'center',
    backgroundColor: Colors.asphalt,
    color: Colors.white,
    borderRadius: 11,
    marginBottom: 35,
    fontSize: 40,
    paddingHorizontal: 20,
    paddingVertical: 15,
    fontWeight: '500',
  },
  featuresButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
    marginBottom: 60,
  },
  featureButton: {
    backgroundColor: Colors.asphalt,
    borderRadius: 50,
    marginRight: 20,
    padding: 17,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
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
  buttonLabel: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: '400',
  },
});
