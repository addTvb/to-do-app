import { useState } from 'react';
import './App.css';

function App() {
	const [tasks, setTasks] = useState(['Super', 'duper', 'puper']);
	const [favorites, setFavorites] = useState([]);
	const [inputValue, setInputValue] = useState('');

	const handleAddToFavorite = (event, taskIndex, listType) => {
		if (listType === 'task-list' && event.target.checked) {
			const filteredArr = tasks.filter((item, index) => {
				if (index === taskIndex) {
					setFavorites([...favorites, item]);
				} else {
					return item;
				}
			});
			setTasks(filteredArr);
			event.target.checked = false;
		}

		if (listType === 'fav-list' && event.target.checked) {
			const filteredArr = favorites.filter((item, index) => {
				if (index === taskIndex) {
					setTasks([...tasks, item]);
				} else {
					return item;
				}
			});
			setFavorites(filteredArr);
			event.target.checked = false;
		}
	};

	const handleChangeInput = (event) => {
		setInputValue(event.target.value);
	};

	const handleAddTask = () => {
		if (inputValue !== '') {
			const allTasks = [...tasks, ...favorites];

			const isNotDuplicate = allTasks.every((task) => task !== inputValue);

			if (isNotDuplicate) setTasks([...tasks, inputValue]);
		}
		// TODO add react-hot-toast
	};

	return (
		<div>
			<input type='text' value={inputValue} onChange={handleChangeInput} />
			<button onClick={handleAddTask}>Add</button>
			<ol>
				{favorites.map(function (favTask, index) {
					return (
						<li key={index} style={{ color: 'red' }}>
							{favTask}
							<input
								type='checkbox'
								onChange={(event) =>
									handleAddToFavorite(event, index, 'fav-list')
								}
							/>
						</li>
					);
				})}
				{tasks.map(function (task, index) {
					return (
						<li key={index}>
							{task}
							<input
								type='checkbox'
								onChange={(event) =>
									handleAddToFavorite(event, index, 'task-list')
								}
							/>
						</li>
					);
				})}
			</ol>
		</div>
	);
}

export default App;
