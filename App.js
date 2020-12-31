import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

const App = () => {
	const [name, setName] = useState('Gerald');
	const [age, setAge] = useState('23');

	return (
		<View style={styles.container}>
			<Text>Enter name:</Text>
			<TextInput
				multiline
				style={styles.input}
				placeholder="e.g. John Doe"
				onChangeText={(input) => setName(input)}
			/>

			<Text>Enter age:</Text>
			<TextInput
				keyboardType="numeric"
				style={styles.input}
				placeholder="e.g. 21"
				onChangeText={(input) => setAge(input)}
			/>
			<Text>
				Name: {name}, Age: {age}
			</Text>
			<StatusBar style="auto" />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	input: {
		borderWidth: 1,
		borderColor: '#777',
		padding: 9,
		margin: 10,
		width: 200,
	},
});

export default App;
