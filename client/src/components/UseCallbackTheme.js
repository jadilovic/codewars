import { useCallback, useMemo, useState, useEffect, useRef } from 'react';
import NumbersList from './NumbersList';

const UseCallbackTheme = () => {
	const [number, setNumber] = useState(0);
	const [write, setWrite] = useState('');
	const [dark, setDark] = useState(false);
	const inputRef = useRef();
	const prevValue = useRef('');

	const slowFunction = (number) => {
		for (let index = 0; index < 1000000000; index++) {}
		return number * 2;
	};

	const theme = useMemo(() => {
		return {
			color: dark ? 'white' : 'blue',
			backgroundColor: dark ? 'blue' : 'white',
		};
	}, [dark]);

	useEffect(() => {
		console.log('theme changed');
	}, [theme]);

	useEffect(() => {
		prevValue.current = write;
	}, [write]);

	const numbersList = useCallback(() => {
		return [number, number + 1, number + 2];
	}, [number]);

	const doubleNumber = useMemo(() => {
		return slowFunction(number);
	}, [number]);

	return (
		<div style={theme}>
			<h2>Use Callback Theme</h2>
			<input
				ref={inputRef}
				type="number"
				name="number"
				value={number}
				onChange={(e) => setNumber(Number(e.target.value))}
			/>
			<br />
			<input
				type="text"
				name="write"
				value={write}
				onChange={(e) => setWrite(e.target.value)}
			/>
			<br />
			<button onClick={() => setDark(!dark)}>Change Theme</button>
			<br />
			<button onClick={() => inputRef.current.focus()}>Focus</button>
			<p>{`Previous value was '${prevValue.current}' and now is '${write}'`}</p>
			<h3>{doubleNumber}</h3>
			<NumbersList numbersList={numbersList} />
		</div>
	);
};
export default UseCallbackTheme;
