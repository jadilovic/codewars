import { useState } from 'react';
import './App.css';

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
		<div className="App">
			<header className="App-header">
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
	);
}

export default App;
