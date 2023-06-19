import {
  BottomTabBar,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {HomeScreen} from '../screens/home/HomeScreen';
import {FormScreen} from '../screens/FormScreen/FormScreen';
import {VariationsScreen} from '../screens/ButtonsScreen/ButtonsScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBar={props => <BottomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Form" component={FormScreen} />
      <Tab.Screen name="Variations" component={VariationsScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
