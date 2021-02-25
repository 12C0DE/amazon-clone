import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

//inital state
const initialState = {
	basket : [],
	user   : null
};

//create context
export const GlobalContext = createContext(initialState);

//provider component
export const GlobalProvider = ({ children }) => {
	const [
		state,
		dispatch
	] = useReducer(AppReducer, initialState);

	//actions
	function addToBasket(item) {
		dispatch({
			type    : 'ADD_TO_BASKET',
			payload : item
		});
	}

	function removeFromBasket(id) {
		dispatch({
			type    : 'REMOVE_FROM_BASKET',
			payload : id
		});
	}

	function setUser(user) {
		dispatch({
			type    : 'SET_USER',
			payload : user
		});
	}

	return (
		<GlobalContext.Provider
			value={{
				basket           : state.basket,
				user             : state.user,
				addToBasket,
				removeFromBasket,
				setUser
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};
