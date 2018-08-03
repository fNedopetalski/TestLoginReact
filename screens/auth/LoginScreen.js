import React from 'react';
import { StyleSheet, View, Text, TextInput, Button, Alert } from 'react-native';
import firebase from 'firebase';

export default class LoginScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        };
    }

    onLoginPress = () => {
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => { }, (error) => {
                Alert.alert(error.message);
            });
    }

    onCriarContaPress = () =>{
        this.props.navigation.navigate("Cadastro");
    }

    onEsqueceuSenhaPress = () =>{
        this.props.navigation.navigate("EsqueceuSenha");
    }

    render() {

        return (
            <View style = {styles.container}>
                <Text style={styles.welcome}>Email</Text>
                <TextInput
                    value={this.state.email}
                    style={styles.login}
                    onChangeText={(text) => {this.setState({email: text})}}
                    underlineColorAndroid= "rgba(0,0,0,0)"
                    placeholder= "Ex: example@gmail.com"
                    keyboardType = "email-address"
                    autoCapitalize="none"
                />
                <Text style={styles.welcome}>Senha</Text>
                <TextInput style={{height:40, width: 300, borderWidth: 1}}
                    value={this.state.password}
                    style={styles.login}
                    onChangeText={(text) => {this.setState({password: text})}}
                    underlineColorAndroid= "rgba(0,0,0,0)"
                    placeholder= "Senha"
                    secureTextEntry = {true}
                    autoCapitalize="none"
                />
                <View style={styles.buttonContainer}>
                    <Button title = "Login" onPress={this.onLoginPress} color="#70BD85"/>
                    <View style={{paddingTop:15}}/>
                    <Button title = "Cadastrar" onPress={this.onCriarContaPress}/>
                    <View style={{paddingTop:15}}/>
                    <Button title = "Esqueci minha senha" onPress={this.onEsqueceuSenhaPress}/>
                </View>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 100,
        marginHorizontal: 20,
        justifyContent: 'center',
        padding: 20,
        borderRadius: 10,
        backgroundColor: '#FFF',
    },

    welcome: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 5,
    },

    login: {
        alignSelf: 'stretch',
        marginTop: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderColor: '#DDD',
        height: 40,
        borderRadius: 3,
    },

    buttonContainer:{
        marginTop: 15,
        height: 150,
    },

});