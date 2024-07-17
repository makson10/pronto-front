import axios from 'axios';
import { store } from './store';
import { Profile } from '@/types/profile';

export const getAndStoreUser = async () => {
	const userRequest = await axios.post('/api/getuser');
	const user = userRequest.data;
	store.setState({ user });
};

export const storeProfile = async (profile: Profile) => {
	store.setState({ profile });
};

export const resetUserData = () => {
	store.setState((state) => ({ ...state, user: null }));
};
