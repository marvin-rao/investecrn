import {ReactNode} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors} from '../style/Colors';

type TopActionBarProps = {
  title: string;
  items: ReactNode[];
};

const TopActionBar = ({title, items}: TopActionBarProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.itemsContainer}>{items}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: Colors.primary,
    borderBottomColor: '#ebebeb',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  itemsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default TopActionBar;
