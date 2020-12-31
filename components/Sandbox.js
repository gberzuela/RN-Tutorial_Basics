import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Sandbox = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.boxOne}>one</Text>
			<Text style={styles.boxTwo}>two</Text>
			<Text style={styles.boxThree}>three</Text>
			<Text style={styles.boxFour}>four</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	boxOne: {
		flex: 1,
		/*
      giving a child a flex property means it will take up as much space as it could
      1/4 in this case because there are 4 boxes with flex: 1
    */
		backgroundColor: 'violet',
		padding: 10,
	},
	boxTwo: {
		flex: 1,
		backgroundColor: 'gold',
		padding: 20,
	},
	boxThree: {
		flex: 1,
		backgroundColor: 'coral',
		padding: 30,
	},
	boxFour: {
		flex: 1,
		backgroundColor: 'skyblue',
		padding: 40,
	},
	container: {
		// flex: 1,
		/*
      Giving a flex property to a parent container will
      display: flex is kind of a given so we could just declare flex box properties
    */
		flexDirection: 'row', // determines main axis (default: column)
		justifyContent: 'space-around', // main axis
		alignItems: 'center', // cross axis
		paddingTop: 40,
		backgroundColor: '#ddd',
	},
});

export default Sandbox;
