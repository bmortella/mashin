import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen'
import MapScreen from './screens/MapScreen';

const MainNavigator = createStackNavigator({
  Login: {screen: LoginScreen},
  Register: {screen: SignupScreen},
  Map: {screen : MapScreen}
});

const App = createAppContainer(MainNavigator);

export default App;
 