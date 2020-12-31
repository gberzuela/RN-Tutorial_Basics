import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

const AddTodo = ({ handleSubmit }) => {
	const [text, setText] = useState('');

	const handleChange = (input) => {
		setText(input);
	};

	return (
		<View>
			<TextInput
				style={styles.input}
				placeholder="New task..."
				value={text}
				onChangeText={handleChange}
			/>
			<Button
				onPress={() => {
					handleSubmit(text);
					setText('');
				}}
				title="Add Task"
				color="coral"
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	input: {
		marginBottom: 10,
		paddingHorizontal: 8,
		paddingVertical: 6,
		borderBottomWidth: 1,
		borderBottomColor: '#ddd',
	},
});

export default AddTodo;
