import {
  BottomTabBar,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {OtherScreen} from '../screens/home/OtherScreen';
import {FormScreen} from '../screens/FormScreen/FormScreen';
import {ButtonsScreen} from '../screens/ButtonsScreen/ButtonsScreen';
import {RootStackParamList} from './types';

const Tab = createBottomTabNavigator<RootStackParamList>();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBar={props => <BottomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="FormScreen" component={FormScreen} />
      <Tab.Screen name="OtherScreen" component={OtherScreen} />
      <Tab.Screen name="ButtonsScreen" component={ButtonsScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
