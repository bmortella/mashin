import React, {Component} from 'react';
import { TouchableOpacity, StyleSheet, View, Text, ScrollView, Alert } from 'react-native';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import Background from '../components/Background';
import { theme } from '../components/theme';

class SignupScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                    email: '',
                    password: '',
                    cpf: '',
                    name: '',
                    lastname: '',
                    cnh: '',
                    };
      }
    
    static navigationOptions = {
        header: null,
    };
    
    handlePress = async () => {
        fetch('http://192.168.0.21:3000/api/users/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
                "args": {
                    "email": this.state.email,
                    "name": this.state.name,
                    "lastname": this.state.lastname,
                    "cpf": this.state.cpf,
                    "password": this.state.password,
                    "cnh": this.state.cnh,
                }
            })
        }).then(() => {
            Alert.alert('Enviado')
        }).catch((error) =>{
            console.error(error);
        });
    }
    render() {
        const {navigate} = this.props.navigation;
        return (
            <Background>
                
            <Logo />
    
            <Header>Criar uma conta.</Header>
            <ScrollView style={{width: "100%"}}>
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
                    label="Nome"
                    onChangeText={(name) => this.setState({name})}
                    returnKeyType="next"
                    value={this.state.name}
                    error=''
                    errorText=''
                    autoCapitalize="none"
                />

                <TextInput
                    label="Sobrenome"
                    onChangeText={(lastname) => this.setState({lastname})}
                    returnKeyType="next"
                    value={this.state.lastname}
                    error=''
                    errorText=''
                    autoCapitalize="none"
                />

                <TextInput
                    label="CPF"
                    onChangeText={(cpf) => this.setState({cpf})}
                    returnKeyType="next"
                    value={this.state.cpf}
                    error=''
                    errorText=''
                    autoCapitalize="none"
                />         
                <TextInput
                    label="CNH"
                    onChangeText={(cpf) => this.setState({cnh})}
                    returnKeyType="next"
                    value={this.state.cnh}
                    error=''
                    errorText=''
                    autoCapitalize="none"
                />     
                <TextInput
                label="Senha"
                onChangeText={(password) => this.setState({password})}
                returnKeyType="done"
                value={this.state.password}
                error=''
                errorText=''
                secureTextEntry
                />
        
            </ScrollView>
            <Button mode="contained" onPress={this.handlePress.bind(this)}>
            Registrar
            </Button>
    
            <View style={styles.row}>
                <Text style={styles.label}>Já tem uma conta? </Text>
                <TouchableOpacity onPress={() => navigate('Login')}>
                <Text style={styles.link}>Faça login</Text>
                </TouchableOpacity>
            </View>
            
          </Background> 
        );
    }
} 

const styles = StyleSheet.create({ 
  row: {
    flexDirection: 'row',
    marginBottom: 10, 
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
});
 
export default SignupScreen;