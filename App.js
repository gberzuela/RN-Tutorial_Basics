import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

const App = () => {
	const [people, setPeople] = useState([
		{ name: 'shaun', key: '1' },
		{ name: 'yoshi', key: '2' },
		{ name: 'mario', key: '3' },
		{ name: 'luigi', key: '4' },
		{ name: 'peach', key: '5' },
		{ name: 'toad', key: '6' },
		{ name: 'bowser', key: '7' },
	]);

	return (
		<View style={styles.container}>
			<ScrollView>
				{people.map((person) => (
					<View key={person.key}>
						<Text style={styles.item}>{person.name}</Text>
					</View>
				))}
			</ScrollView>
			<StatusBar style="auto" />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		paddingTop: 40,
		paddingHorizontal: 20,
		// alignItems: 'center',
		// justifyContent: 'center',
	},
	item: {
		marginTop: 24,
		padding: 30,
		backgroundColor: 'pink',
		fontSize: 24,
	},
});

export default App;
