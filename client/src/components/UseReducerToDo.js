import { useReducer, useState } from 'react';

const ACTIONS = {
	ADD_TODO: 'add_todo',
	REMOVE_TODO: 'remove_todo',
	TOGGLE_COMPLETED: 'toggle_completed',
	DELETE_TODO: 'delete_todo',
};

const UseReducerToDo = () => {
	const [name, setName] = useState('');

	const reducer = (todos, action) => {
		switch (action.type) {
			case ACTIONS.ADD_TODO:
				return [...todos, action.payload];
			case ACTIONS.TOGGLE_COMPLETED:
				return todos.map((todo) => {
					if (todo.name === action.payload) {
						return { ...todo, completed: !todo.completed };
					}
					return todo;
				});
			case ACTIONS.DELETE_TODO:
				return todos.filter((todo) => todo.name !== action.payload);
			default:
				return todos;
		}
	};

	const [todos, dispatch] = useReducer(reducer, []);

	const createTodo = (name) => {
		return { name, date: new Date(), completed: false };
	};

	const addTodo = (e) => {
		e.preventDefault();
		if (name) {
			dispatch({
				type: ACTIONS.ADD_TODO,
				payload: createTodo(name),
			});
			setName('');
		}
	};

	return (
		<div>
			<form onSubmit={addTodo}>
				<label htmlFor="name">ToDo Name:</label>
				<input
					type="text"
					name="name"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<button type="submit">Add Todo</button>
			</form>
			<h3>ToDos:</h3>
			{todos.length < 1
				? 'No todos'
				: todos.map((todo, index) => (
						<div key={index}>
							<p style={{ color: `${todo.completed ? 'green' : 'red'}` }}>{`${
								todo.name
							} -  ${todo.date} - Completed:${
								todo.completed ? 'Yes' : 'No'
							}`}</p>
							<button
								onClick={() =>
									dispatch({
										type: ACTIONS.TOGGLE_COMPLETED,
										payload: todo.name,
									})
								}
							>
								Set Completed
							</button>
							<button
								onClick={() =>
									dispatch({ type: ACTIONS.DELETE_TODO, payload: todo.name })
								}
							>
								Delet Todo
							</button>
						</div>
				  ))}
		</div>
	);
};
export default UseReducerToDo;
