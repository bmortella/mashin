import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LoginScreen from './components/login/LoginScreen';
import SignupScreen from './components/signup/SignupScreen'
import MapScreen from './components/map/MapScreen';

const MainNavigator = createStackNavigator({
  Home: {screen: LoginScreen},
  Signup: {screen: SignupScreen},
  Map: {screen : MapScreen}
});

const App = createAppContainer(MainNavigator);

export default App;

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//     </View>
//   );
// } 

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff', 
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
