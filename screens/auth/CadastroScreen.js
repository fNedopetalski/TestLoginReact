import React from 'react';
import {StyleSheet, View, Text, TextInput, Button, Alert} from 'react-native';
import firebase from 'firebase';


export default class CadastroScreen extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: "",
            passwordConfirm:"",
        };
    }

    onCadastrarPress = () => {
        if (this.state.password !== this.state.passwordConfirm){
            Alert.alert("As senhas não são compatíveis");
            return;
        }


        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => { }, (error) => {
                Alert.alert(error.message);
            });
    }

    onVoltarPress = () => {
        this.props.navigation.navigate("Login");
    }

    render() {
        return (
            <View style = {styles.container}>
                <Text style={styles.welcome}>Email</Text>
                <TextInput style={{height:40, width: 300, borderWidth: 1}}
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
                <Text style={styles.welcome}>Confirmar senha</Text>
                <TextInput style={{height:40, width: 300, borderWidth: 1}}
                    value={this.state.passwordConfirm}
                    style={styles.login}
                    onChangeText={(text) => {this.setState({passwordConfirm: text})}}
                    underlineColorAndroid= "rgba(0,0,0,0)"
                    placeholder= "Confirmar senha"
                    secureTextEntry = {true}
                    autoCapitalize="none"
                />
                <View style={styles.buttonContainer}>
                    <Button title="Cadastrar" onPress={this.onCadastrarPress} color="#70BD85"/>
                    <View style={{paddingTop:15}}/>
                    <Button title="Voltar" onPress={this.onVoltarPress}/>
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