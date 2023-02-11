import { useState, useEffect } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import useLogger from '../hooks/useLogger';

const CustomHook = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const localStorage = useLocalStorage();
	useLogger(name);

	useEffect(() => {
		const existingUser = localStorage.getFromLocalStorage('user');
		if (existingUser) {
			setName(existingUser.name);
			setEmail(existingUser.email);
		}
	}, [localStorage]);

	const handleCreate = () => {
		if (name && email) {
			const user = { name, email };
			localStorage.saveToLocalStorage('user', user);
		}
	};

	const handleRemove = () => {
		localStorage.removeFromLocalStorage('user');
		setName('');
		setEmail('');
	};

	const handleNameChange = (e) => {
		setName(e.target.value);
		localStorage.saveToLocalStorage('name', e.target.value);
	};

	return (
		<div>
			<label htmlFor="name">Name:</label>
			<br />
			<input
				type="text"
				name="name"
				id="name"
				value={name}
				onChange={handleNameChange}
			/>
			<br />
			<label htmlFor="email">Email:</label>
			<br />
			<input
				type="email"
				name="email"
				id="email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>
			<br />
			<button onClick={handleCreate}>Create</button>
			<button onClick={handleRemove}>Remove</button>
		</div>
	);
};
export default CustomHook;
