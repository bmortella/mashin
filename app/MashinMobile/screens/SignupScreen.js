import React, {Component} from 'react';
import { TouchableOpacity, StyleSheet, View, Text, ScrollView } from 'react-native';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import Background from '../components/Background';
import { theme } from '../components/theme';

class SignupScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };
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
                value=''
                error=''
                errorText=''
                autoCapitalize="none"
                autoCompleteType="email"
                textContentType="emailAddress"
                keyboardType="email-address"
                />
        
                <TextInput
                    label="Nome"
                    returnKeyType="next"
                    value=''
                    error=''
                    errorText=''
                    autoCapitalize="none"
                />

                <TextInput
                    label="Sobrenome"
                    returnKeyType="next"
                    value=''
                    error=''
                    errorText=''
                    autoCapitalize="none"
                />

                <TextInput
                    label="CPF"
                    returnKeyType="next"
                    value=''
                    error=''
                    errorText=''
                    autoCapitalize="none"
                />         

                <TextInput
                label="Senha"
                returnKeyType="done"
                value=''
                error=''
                errorText=''
                secureTextEntry
                />
        
        </ScrollView>
                <Button mode="contained" onPress=''>
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