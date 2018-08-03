import React from 'react';
import { StyleSheet, View, Button,} from 'react-native';
import firebase from 'firebase';

export default class TestScreen extends React.Component {
  onSairPress = () => {
    firebase.auth().signOut();
  }

  onCriarSalaPress = () => {
    this.props.navigation.navigate("CriarSala");
  }

  onEntrarSalaPress = () => {
    this.props.navigation.navigate("EntrarSala");
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Button title="Sair" onPress={this.onSairPress} color={"#FF0000"}/>
        </View>
        <View style={styles.opcoes}>
          <Button title="Criar sala" onPress={this.onCriarSalaPress}/>
          <View style={{padding:20}} />
          <Button title="Entrar em uma sala" onPress={this.onEntrarSalaPress}/>
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
  },

  topContainer: {
    padding: 30,
    alignItems: 'flex-end',
    backgroundColor: '#333',
  },

  opcoes: {
    alignItems: 'center',
    marginTop: 150,
  }
});
