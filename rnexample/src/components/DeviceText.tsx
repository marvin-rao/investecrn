import {StyleSheet, Text} from 'react-native';
import {useIsEmulatorNotice} from '../hooks/useEmilatorNotice';

export const DeviceText = () => {
  const {isEmulator} = useIsEmulatorNotice();

  return (
    <Text style={styles.device}>{isEmulator ? 'Emulator' : 'Real Device'}</Text>
  );
};

const styles = StyleSheet.create({
  device: {
    color: 'orange',
    textAlign: 'center',
    paddingVertical: 12,
    width: 100,
    borderRadius: 20,
    alignSelf: 'center',
    borderColor: '#ccc',
    borderWidth: StyleSheet.hairlineWidth,
    marginBottom: 40,
    marginTop: 10,
  },
});
