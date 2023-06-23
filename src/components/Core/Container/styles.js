import {StyleSheet} from 'react-native';
import Colors from '../../../styles/colors';

export const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.white,
    marginBottom: 10,
  },
  actionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  summaryContainer: {
    backgroundColor: Colors.asphalt,
    margin: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 7,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  actionLabel: {
    flex: 1,
    fontSize: 15,
    color: Colors.white,
  },
  actionButtonContainer: {
    flexDirection: 'row',
  },
  actionButtonIcon: {
    color: '#fff',
    margin: 3,
    fontSize: 25,
  },
  actionButtonText: {
    marginTop: 5,
    color: '#fff',
  },
});
