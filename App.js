import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	FlatList,
	Alert,
	TouchableWithoutFeedback,
	Keyboard,
} from 'react-native';

import Header from './components/Header';
import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';

const App = () => {
	const [todos, setTodos] = useState([
		{ text: 'buy coffee', key: '1' },
		{ text: 'create an app', key: '2' },
		{ text: 'play bideo bames', key: '3' },
	]);

	const handlePress = (key) => {
		setTodos((prevTodos) => prevTodos.filter((todo) => todo.key !== key));
	};

	const handleSubmit = (text) => {
		// Alert.alert(title, message, array of buttons)
		text.length > 3
			? setTodos([{ text, key: `${todos.length + 1}` }, ...todos])
			: Alert.alert('OOPS!', 'Task much be over 3 character!', [
					{ text: 'Understood', onPress: () => console.log('alert closed') },
			  ]);
	};

	return (
		<TouchableWithoutFeedback
			onPress={() => {
				Keyboard.dismiss();
				console.log('dismissed keyboard');
			}}
		>
			<View style={styles.container}>
				<Header />
				<View style={styles.content}>
					<AddTodo handleSubmit={handleSubmit} />
					<View style={styles.list}>
						<FlatList
							data={todos}
							renderItem={({ item }) => (
								<TodoItem item={item} handlePress={handlePress} />
							)}
						/>
					</View>
				</View>
				<StatusBar style="auto" />
			</View>
		</TouchableWithoutFeedback>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	content: {
		padding: 40,
	},
	list: {
		marginTop: 20,
	},
});

export default App;
