import React, {Component} from 'react';
import { TouchableOpacity, StyleSheet, View, Text, Alert} from 'react-native';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import Background from '../components/Background';
import { theme } from '../components/theme';
 

class LoginScreen extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
                  email: '',
                  password: '',
                  };
    }

    static navigationOptions = {
        header:null,
    };
    
    handlePress = async () => {
      fetch('http://192.168.0.21:3000/api/users/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ 
              "args": {
                  "email": this.state.email,
                  "password": this.state.password,
              }
          })
      }).then(() => {
          this.props.navigation.navigate('Map')
      }).catch((error) =>{
          Alert.alert(error);
      });
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <Background>
        
            <Logo />
       
            <Header>Bem-vindo.</Header>
      
            <TextInput
              label="Email"
              returnKeyType="next"
              onChangeText={(email) => this.setState({email})}
              value={this.state.email}
              error=''
              errorText=''
              autoCapitalize="none"
              autoCompleteType="email"
              textContentType="emailAddress"
              keyboardType="email-address"
            />
      
            <TextInput
              label="Senha"
              returnKeyType="done"
              onChangeText={(password) => this.setState({password})}
              value={this.state.password}
              error=''
              errorText=''
              secureTextEntry
            />
      
            <Button mode="contained" onPress={this.handlePress.bind(this)}>
              Login
            </Button>
      
            <View style={styles.row}>
            <Text style={styles.label}>Não tem uma conta? </Text>
            <TouchableOpacity onPress={() => navigate('Register')}>
              <Text style={styles.link}>Criar uma</Text>
            </TouchableOpacity>
          </View> 
          </Background> 
        );
    }
} 

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
});
 
export default LoginScreen;