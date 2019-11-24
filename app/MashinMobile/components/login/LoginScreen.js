import React, {Component} from 'react';
import { StyleSheet, TextInput, View, Image, Button, Alert } from 'react-native';

class LoginScreen extends React.Component {
    static navigationOptions = {
        title: 'Login',
    };
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <Image source={require('../../assets/logoazul.png')} style={{width: 200, height:200}}/>
                <TextInput
                style={styles.input}
                placeholder="Email"
                />
                <TextInput
                style={styles.input}
                secureTextEntry={true}
                placeholder="Senha"
                />
                <Button
                title="Login"
                onPress={() => navigate('Map')}
                />
            </View>
        );
    }
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      width: 270,
      marginBottom: 20,
  }
});
 
export default LoginScreen;