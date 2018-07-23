import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, Button } from 'react-native';
import fire from './firebase';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      messages: [],
      userMessage: ''                 
    };
  }

  componentWillMount() {
    let messagesRef = fire.database().ref('messages').orderByKey().limitToLast(100);
    messagesRef.on('child_added', snapshot => {
      let message = { key: snapshot.val(), id: snapshot.key };
      this.setState({ messages: [message].concat(this.state.messages) });
    })
  }

  addMessage() {
    fire.database().ref('messages').push( this.state.userMessage );
    this.state.userMessage = '';
    this.state.messages = fire.database().ref('messages').orderByKey().limitToLast(100);
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <TextInput 
            style={{height: 60, width: 200, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(userMessage) => this.setState({userMessage})} 
            value={this.state.userMessage}
          />
        </View>
        <View>
          <Button
            onPress={() => this.addMessage()}
            title="Submit"
            color="#841584"
            accessibilityLabel="Submit your message to the database"
          />
        </View>
        <ScrollView>
          {
            this.state.messages.map((item, index) => (
                <View key = {item.id} style = {styles.listView}>
                  <Text>{item.key}</Text>
                </View>
              ))
          }
        </ScrollView>
      </View>

    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  listView: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center'
  },
  emptyMessageStyle: {
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center'
  } 

});