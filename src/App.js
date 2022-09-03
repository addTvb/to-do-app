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
		<div className='w-screen flex justify-center items-center h-screen'>
			<div className='w-[400px] flex flex-col gap-y-1'>
				<div className='flex '>
					<input
						value={input}
						onChange={handleChangeInput}
						className='border border-black p-2 w-full'
					/>
					<button
						onClick={handleSubmit}
						className='border font-medium border-black px-4 py-2 hover:bg-black hover:text-white transition-all min-w-[100px]'
					>
						Add task
					</button>
				</div>
				<div>
					<ol className='flex gap-y-2 flex-col text-lg'>
						{tasks.map(function (task, taskIndex) {
							return (
								<li
									key={taskIndex}
									className='flex gap-x-2 items-center justify-between'
								>
									<span>
										<b>{taskIndex + 1}</b>) {task}
									</span>
									<button
										onClick={() => handleDelete(taskIndex)}
										className='px-2 font-medium border-2 border-red-500 text-xl hover:bg-red-500 hover:text-white transition-all'
									>
										X
									</button>
								</li>
							);
						})}
					</ol>
				</div>
			</div>
		</div>
	);
}
