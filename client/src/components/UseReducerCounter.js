import { useReducer } from 'react';

const ACTIONS = {
	INCREMENT: 'increment',
	DECREMENT: 'decrement',
};

const UseReducerCounter = () => {
	//const [count, setCount] = useState(0);

	const reducer = (state, action) => {
		switch (action.type) {
			case ACTIONS.INCREMENT:
				return { count: state.count + 1 };
			case ACTIONS.DECREMENT:
				return { count: state.count - 1 };
			default:
				return state;
		}
	};

	const [state, dispatch] = useReducer(reducer, { count: 0 });

	const increment = () => {
		dispatch({ type: ACTIONS.INCREMENT });
		// setCount((count) => count + 1);
	};

	const decrement = () => {
		dispatch({ type: ACTIONS.DECREMENT });
		// setCount((count) => count - 1);
	};

	return (
		<div className="counter">
			<button onClick={decrement}>-</button>
			<span>{state.count}</span>
			<button onClick={increment}>+</button>
		</div>
	);
};
export default UseReducerCounter;
