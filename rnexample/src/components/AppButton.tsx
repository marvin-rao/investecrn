import {
  Text,
  StyleSheet,
  StyleProp,
  ActivityIndicator,
  TouchableOpacity,
  ViewStyle,
  TextProps,
} from 'react-native';

type AppButtonProps = {
  label: string;
  icon?: string;
  onPress?: () => void;
  containerStyle?: StyleProp<ViewStyle>;
  labelStyle?: TextProps['style'];
  loading?: boolean;
};

export const AppButton = (props: AppButtonProps) => {
  const {loading, label, onPress, containerStyle, labelStyle} = props;

  return (
    <TouchableOpacity
      // @ts-ignore
      style={{...styles.rowContainer, ...containerStyle}}
      onPress={onPress}>
      {/* @ts-ignore */}
      <Text style={{...styles.label, ...labelStyle}}>{label}</Text>
      {loading && <ActivityIndicator />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 6,
    paddingVertical: 14,
    paddingHorizontal: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
  },
  icon: {
    fontSize: 24,
    marginRight: 16,
    color: '#000',
  },
  label: {
    fontSize: 18,
    color: '#000',
    flex: 1,
    textAlign: 'center',
  },
});
