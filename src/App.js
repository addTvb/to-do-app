import { useState } from 'react';

function App() {
	const [input, setInput] = useState('');
	const [tasks, setTasks] = useState(['Learn React.js', 'Perfectly pass exam']);

	const handleInput = (event) => setInput(event.target.value);
	const handleSubmit = () => setTasks([...tasks, input]);
	const handleDelete = (task) => {
		const filteredArr = tasks.filter((item) => item !== task);
		setTasks(filteredArr);
	};

	return (
		<div>
			<div>
				<input
					value={input}
					onChange={handleInput}
					className='border border-black'
				/>
				<button
					className='py-1 px-3 bg-blue-400 rounded-md transition-all border-2 border-black active:scale-95'
					onClick={handleSubmit}
				>
					Add task
				</button>
			</div>
			<ul>
				{tasks.map((task, index) => (
					<li key={index} className='mb-1'>
						{index + 1}. {task}
						<button
							onClick={() => handleDelete(task)}
							className='p-1 bg-red-500'
						>
							X
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}

export default App;
