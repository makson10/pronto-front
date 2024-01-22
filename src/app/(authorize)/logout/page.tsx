'use client';
import { store, initialValues } from '@/context/store';
import axios from 'axios';

export default function LogOut() {
	const handleClick = async () => {
		await axios.post('/api/logout').then(console.log);
		store.setState(initialValues);
	};

	return <button onClick={handleClick}>Fuck u</button>;
}
