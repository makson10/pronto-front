'use client';
import axios from 'axios';

export default function LogOut() {
	const handleClick = async () => {
		await axios.post('/api/logout').then(console.log);
	};

	return <button onClick={handleClick}>Fuck u</button>;
}
