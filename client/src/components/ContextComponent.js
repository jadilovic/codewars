import { useTheme, useThemeUpdate } from '../context/ThemeContext';

const ContextComponent = () => {
	const dark = useTheme();
	const toggleDarkTheme = useThemeUpdate();

	const theme = {
		color: `${dark ? 'white' : 'red'}`,
		backgroundColor: `${dark ? 'red' : 'white'}`,
		padding: '2rem',
		margin: '2rem',
	};

	return (
		<>
			<button onClick={toggleDarkTheme}>{`Switch to${
				dark ? ' light' : ' dark'
			}`}</button>
			<div style={theme}>ContextComponent</div>
		</>
	);
};
export default ContextComponent;
