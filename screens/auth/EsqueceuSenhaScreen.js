import React from 'react';
import {StyleSheet, View, Text, TextInput, Button, Alert} from 'react-native';
import firebase from 'firebase';

export default class EsqueceuSenhaScreen extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            email:"",
        };
    }

    onRedefinirSenhaPress = () => {
        firebase.auth().sendPasswordResetEmail(this.state.email)
            .then(() => {
                Alert.alert("A senha foi resetada! Cheque seu email para redefini-la.")
            }, (error) => {
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
                <TextInput 
                    value={this.state.email}
                    style={styles.login}
                    onChangeText={(text) => {this.setState({email: text})}}
                    underlineColorAndroid= "rgba(0,0,0,0)"
                    placeholder= "Ex: example@gmail.com"
                    keyboardType = "email-address"
                    autoCapitalize="none"
                />
                <View style={styles.buttonContainer}>
                    <Button title="Redefinir senha" onPress={this.onRedefinirSenhaPress} color= "#70BD85"/>
                    <View style={{paddingTop:10}}/>
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