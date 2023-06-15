import {StyleSheet} from 'react-native';
import Colors from '../../../styles/colors';

export const styles = StyleSheet.create({
  featureLine: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
  },
  lineInfos: {
    width: '50%',
  },
  descLabel: {
    color: Colors.white,
    marginBottom: 4,
  },
  bottomInfos: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoIcon: {
    fontSize: 15,
    marginRight: 3,
    color: Colors.champagneDark,
  },
  bottomInfo: {
    color: Colors.metal,
    marginRight: 10,
    fontSize: 13,
  },
  lineAmount: {
    marginLeft: 'auto',
    color: Colors.white,
  },
});
