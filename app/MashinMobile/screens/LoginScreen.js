import React, {Component} from 'react';
import { TouchableOpacity, StyleSheet, View, Text} from 'react-native';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import Background from '../components/Background';
import { theme } from '../components/theme';
 

class LoginScreen extends React.Component {
    static navigationOptions = {
        header:null,
    };
    
    render() {
        const {navigate} = this.props.navigation;
        return (
            <Background>
        
            <Logo />
       
            <Header>Bem-vindo.</Header>
      
            <TextInput
              label="Email"
              returnKeyType="next"
              value=''
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
              value=''
              error=''
              errorText=''
              secureTextEntry
            />
      
            {/* <View style=>
              <TouchableOpacity
                onPress={() => navigation.navigate('ForgotPassword')}
              >
                <Text style={styles.label}>Esqueceu sua senha?</Text>
              </TouchableOpacity>
            </View>  */}
      
            <Button mode="contained" onPress=''>
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