import React, { useState, useContext } from 'react';

const ThemeContext = React.createContext();
const ThemeToggleContext = React.createContext();

export const useTheme = () => {
	return useContext(ThemeContext);
};

export const useThemeUpdate = () => {
	return useContext(ThemeToggleContext);
};

export const ThemeProvider = ({ children }) => {
	const [dark, setDark] = useState(false);

	const toggleDarkTheme = () => {
		setDark((dark) => !dark);
	};

	return (
		<ThemeContext.Provider value={dark}>
			<ThemeToggleContext.Provider value={toggleDarkTheme}>
				{children}
			</ThemeToggleContext.Provider>
		</ThemeContext.Provider>
	);
};
