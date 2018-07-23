import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default class ButtonBasics extends Component {
  _onPressButton() {
    Alert.alert('Beep boop')
  }

  constructor(props) {
    super(props);
    this.state = {
      titleText: "2R1B",
      bodyText: 'This is not really a bird nest.',
      text: ''
    };
  }

  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.titleText}>{this.state.titleText}</Text>
        <View style={{padding: 10}}>
          <TextInput
            style={{height: 40, textAlign: 'center'}}
            placeholder="Room Code"
            onChangeText={(text) => this.setState({text})}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Quick Join"
            color="#001f3f"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Create Room"
            color="#001f3f"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 72,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => ButtonBasics);
