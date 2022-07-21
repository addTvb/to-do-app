import React, { useState } from 'react';
import './App.css';

export default function App() {
	// JS
	const [tasks, setTasks] = useState(['Learn React.js', 'Complete to-do list']);
	const [input, setInput] = useState('');

	const handleChangeInput = (event) => {
		setInput(event.target.value);
	};

	const handleSubmit = () => {
		if (input !== '') {
			setTasks([...tasks, input]);
			setInput('');
		} else {
			alert('Введите что нибудь!');
		}
	};

	const handleDelete = (taskIndex) => {
		const filteredArray = tasks.filter((task, index) => {
			return index !== taskIndex;
		});

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
