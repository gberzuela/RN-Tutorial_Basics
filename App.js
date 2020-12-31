import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

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
		setTodos((prevTodos) => todos.filter((todo) => todo.key !== key));
	};

	const handleSubmit = (text) => {
		setTodos([{ text, key: `${todos.length + 1}` }, ...todos]);
	};

	return (
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
