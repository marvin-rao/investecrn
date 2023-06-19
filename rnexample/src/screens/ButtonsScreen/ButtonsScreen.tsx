import {StyleSheet, View} from 'react-native';
import TopActionBar from '../../components/TopActionBar';

export const VariationsScreen = () => {
  return (
    <View style={styles.container}>
      <TopActionBar title="Variations" items={[]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: 'rgba(0,0,0,.1)',
  },
  noTasksMessage: {
    textAlign: 'center',
    marginTop: 300,
    fontSize: 18,
  },
});