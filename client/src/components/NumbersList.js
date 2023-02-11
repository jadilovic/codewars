import { useEffect, useState } from 'react';

const NumbersList = ({ numbersList }) => {
	const [items, setItems] = useState([]);

	useEffect(() => {
		setItems(numbersList());
		console.log('test');
	}, [numbersList]);
	return (
		<div>
			<h2>Numbers List</h2>
			{items.map((number, index) => (
				<p key={index}>{number}</p>
			))}
		</div>
	);
};
export default NumbersList;
