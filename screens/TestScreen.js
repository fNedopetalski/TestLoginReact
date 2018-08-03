import React from 'react';
import { Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View, Button,} from 'react-native';
import {TestComponent } from './../components/AppComponents'
import firebase from 'firebase';

export default class TestScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  onSairPress = () => {
    firebase.auth().signOut();
  }

  render() {
    return (
      <View style={{padding:30}}>
        <Text>Hello</Text>
        <TestComponent />

        <Button title="Sair" onPress={this.onSairPress}/>
      </View>
    );
  }

}

const styles = StyleSheet.create({

});
