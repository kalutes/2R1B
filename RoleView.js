import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';

export default class RoleView extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Text style={roleViewStyles.nameStyle}>{this.props.displayName}</Text>
		);
	}
}

const roleViewStyles = StyleSheet.create({

  nameStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },

});