import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Task} from '../types';

export const Card = ({task, onPress}: {task: Task; onPress: () => void}) => {
  const {title, description} = task;
  return (
    <TouchableOpacity testID="card" style={styles.container} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <View style={styles.footer}>
        <View style={styles.tags} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: '#fff',
    marginBottom: 4,
    padding: 14,
  },
  title: {
    fontSize: 18,
    marginBottom: 7,
  },
  footer: {
    marginTop: 4,
    display: 'flex',
    flexDirection: 'row',
  },
  tags: {
    flex: 1,
    fontSize: 12,
  },
  time: {
    color: '#rgba(0,0,0,.6)',
  },
  description: {
    fontSize: 15,
  },
});
