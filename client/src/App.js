import React, { useState } from 'react';
import './App.css';
import ContextComponent from './components/ContextComponent';
import CustomHook from './components/CustomHook';
import UseCallbackTheme from './components/UseCallbackTheme';
import UseReducerCounter from './components/UseReducerCounter';
import UseReducerToDo from './components/UseReducerToDo';
import { ThemeProvider } from './context/ThemeContext';

function App() {
	const [user, setUser] = useState({
		email: '',
		password: '',
	});
	const [responseData, setResponseData] = useState(null);

	const handleChange = (e) => {
		setUser({
			...user,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch('http://localhost:4000/login', {
				method: 'POST',
				body: JSON.stringify(user),
				headers: {
					'Content-Type': 'application/json',
				},
			});
			const data = await response.json();
			console.log(data);
			setResponseData(data);
		} catch (error) {
			console.log(error.message);
		}
	};

	return (
		<ThemeProvider>
			<div className="App">
				<header className="App-header">
					<ContextComponent />
					<UseCallbackTheme />
					<UseReducerToDo />
					<UseReducerCounter />
					<CustomHook />

					<div className="box-model">Box Model</div>
					<div className="out">
						<div className="in"></div>
					</div>
					<h2>Login Form</h2>
					<form onSubmit={handleSubmit}>
						<label htmlFor="email">Email:</label>
						<input
							type="text"
							name="email"
							value={user.email}
							onChange={handleChange}
						/>
						<label htmlFor="password">Password:</label>
						<input
							type="password"
							name="password"
							value={user.password}
							onChange={handleChange}
						/>
						<button type="submit">Login</button>
					</form>
					<p>
						Submitted:
						{responseData?.email
							? `${responseData.email}, ${responseData.password}`
							: responseData?.message
							? `${responseData.message}`
							: 'No submissions yet.'}
					</p>
				</header>
			</div>
		</ThemeProvider>
	);
}

export default App;
