import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const App = () => {
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.boldText}>Hello world!</Text>
			</View>
			<View style={styles.body}>
				<Text>Testing for React Native Tutorial #3</Text>
				<Text>React Native is fun! (I think)</Text>
				<Text>Let's get brazy</Text>
			</View>
			<StatusBar style="auto" />
		</View>
	);
};

const styles = StyleSheet.create({
	body: {
		backgroundColor: 'yellow',
		padding: 20,
	},
	boldText: {
		fontWeight: 'bold',
	},
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	header: {
		backgroundColor: 'pink',
		padding: 20,
	},
});

export default App;
