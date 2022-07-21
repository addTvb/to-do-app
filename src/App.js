import React, { useState, useEffect } from 'react';
import './App.css';

export default function App() {
	// JS
	const [tasks, setTasks] = useState(['Learn React.js', 'Complete to-do list']);
	const [input, setInput] = useState('');

	useEffect(() => {
		const localTasks = localStorage.getItem('tasks');

		if (localTasks) {
			const parsedTasks = JSON.parse(localTasks);
			setTasks(parsedTasks);
		} else {
			const stringedTasks = JSON.stringify(tasks);
			localStorage.setItem('tasks', stringedTasks);
		}
	}, []);

	const handleChangeInput = (event) => {
		setInput(event.target.value);
	};

	const handleSubmit = () => {
		if (input !== '') {
			const stringedTasks = JSON.stringify([...tasks, input]);
			localStorage.setItem('tasks', stringedTasks);
			setTasks([...tasks, input]);
			setInput('');
		} else {
			alert('Write some text!');
		}
	};

	const handleDelete = (taskIndex) => {
		const filteredArray = tasks.filter((task, index) => {
			return index !== taskIndex;
		});
		const stringedTasks = JSON.stringify(filteredArray);
		localStorage.setItem('tasks', stringedTasks);

		setTasks(filteredArray);
	};

	return (
		// JSX
		<div>
			<div>
				<input value={input} onChange={handleChangeInput} />
				<button onClick={handleSubmit}>Add task</button>
			</div>
			<div>
				<ol>
					{tasks.map(function (task, taskIndex) {
						return (
							<li key={taskIndex}>
								{task}
								<button onClick={() => handleDelete(taskIndex)}>X</button>
							</li>
						);
					})}
				</ol>
			</div>
		</div>
	);
}
