import React from 'react';
import { StyleSheet, View, Button, Text,} from 'react-native';
import firebase from 'firebase';

export default class CriarSala extends React.Component{

    onVoltarPress = () => {
        this.props.navigation.navigate("EscolheSala");
    }

    render() {
        return (
            <View style={{padding:20}}>
                <Text>CriarSalaScreen</Text>
                <View style={{paddingTop:15}}/>
                <Button title="Voltar" onPress={this.onVoltarPress}/>
            </View>
        );
    }
}