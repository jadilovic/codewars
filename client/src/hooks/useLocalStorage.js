const useLocalStorage = () => {
	const saveToLocalStorage = (name, value) => {
		localStorage.setItem(name, JSON.stringify(value));
	};

	const removeFromLocalStorage = (name) => {
		localStorage.removeItem(name);
	};

	const getFromLocalStorage = (name) => {
		return JSON.parse(localStorage.getItem(name));
	};

	return { saveToLocalStorage, removeFromLocalStorage, getFromLocalStorage };
};
export default useLocalStorage;
