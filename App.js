import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

const App = () => {
	const [people, setPeople] = useState([
		{ name: 'shaun', id: '1' },
		{ name: 'yoshi', id: '2' },
		{ name: 'mario', id: '3' },
		{ name: 'luigi', id: '4' },
		{ name: 'peach', id: '5' },
		{ name: 'toad', id: '6' },
		{ name: 'bowser', id: '7' },
	]);
	/*
    FlatList automatically looks for and adds 'key' on any JSX we are rendering iteratively
    FlatList will only render a certain amount of items whereas ScrollView will render everything; FlatList has better performance?
    If the data given to FlatList doesn't have a key property on each item, we can use the keyExtractor attribute to tell FlatList what property to use as the key from each item
  */
	return (
		<View style={styles.container}>
			<FlatList
				numColumns={2}
				keyExtractor={(item) => item.id}
				data={people}
				renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
			/>
			{/* <ScrollView>
				{people.map((person) => (
					<View key={person.key}>
						<Text style={styles.item}>{person.name}</Text>
					</View>
				))}
			</ScrollView> */}
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
		marginHorizontal: 10,
		marginTop: 24,
	},
});

export default App;
