import React from 'react';
import { StyleSheet, View, Button, Text,} from 'react-native';
import firebase from 'firebase';

export default class CriarSala extends React.Component{

    onVoltarPress = () => {
        this.props.navigation.navigate("EscolheSala");
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.topo}>
                    <Button title="Voltar" onPress={this.onVoltarPress}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#333',
    },

    topo: {
        padding:30,
        marginBottom: 10,
        alignItems: 'flex-end',
        backgroundColor: '#000',
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