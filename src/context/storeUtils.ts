import axios from 'axios';
import { store } from './store';

export const getAndStoreUser = async () => {
	const getUserRequest = await axios.post('/api/getuser');
	const user = getUserRequest.data;
	store.setState({ user });
};

export const resetUserData = () => {
	store.setState((state) => ({ ...state, user: null }));
};
