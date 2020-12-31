import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const App = () => {
	const [name, setName] = useState('Gerald');
	const [person, setPerson] = useState({ name: 'Mario', age: 40 });

	const handlePress = () => {
		setName('Lou');
		setPerson({ name: 'Luigi', age: 45 });
	};

	return (
		<View style={styles.container}>
			<Text>My name is {name}</Text>
			<Text>
				His name is {person.name} and his age is {person.age}
			</Text>
			<View style={styles.buttonContainer}>
				<Button title="update state" onPress={handlePress} />
			</View>
			<StatusBar style="auto" />
		</View>
	);
};

const styles = StyleSheet.create({
	buttonContainer: {
		marginTop: 20,
	},
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default App;
