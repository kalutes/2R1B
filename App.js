import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, Button } from 'react-native';
import database from './firebase';
import RoleView from './RoleView';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      pageTitle:  "2R1B",
      roomCodeQuery: "",
      authenticatedRoomCode: "None",
      roles: []                 
    };
  }

  componentDidMount() {
    database.syncState('rooms', {
      context: this,
      state: 'rooms',
      asArray: true
    });

    database.syncState('roles', {
      context: this,
      state: 'roles',
      asArray: true
    });
  }

  queryJoinRoom() {
    this.state.rooms.map((room) => {
      console.warn(room.roomCode);
    });
  }

  render() {
    var rolesList = this.state.roles.map((role) => {
            return <RoleView displayName={role.displayName} key={role.displayName}/>;
    });

    return (
      <View style={styles.container}>
        <Text style={styles.pageTitle}>{this.state.pageTitle}</Text>
        <View>
          <TextInput 
            style={{height: 60, width: 200, borderColor: 'gray', borderWidth: 1, textAlign: 'center'}}
            onChangeText={(roomCodeQuery) => this.setState({roomCodeQuery})}
            placeholder="Room Code" 
            value={this.state.roomCodeQuery}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => this.queryJoinRoom()}
            title="Join Room"
            accessibilityLabel="Join the specified room"
            style={styles.buttonStyle}
          />
        </View>
        <ScrollView style={{maxHeight: 200}}>
        {
          rolesList
        }
        </ScrollView>
      </View>

    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonContainer: {
    margin: 20
  },
  buttonStyle: {
    backgroundColor: '#1E6738'
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
  },
  scrollView: {
    maxHeight: 100
  },
  baseText: {
    fontFamily: 'Cochin',
  },
  pageTitle: {
    fontSize: 72,
    fontWeight: 'bold',
    textAlign: 'center',
  },

});