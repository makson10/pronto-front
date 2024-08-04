'use client';
import { Button } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const DeleteIcon = () => {
	const router = useRouter();

	const handleClick = async () => {
		await axios.post('/api/deleteicon');
		router.refresh();
	};

	return (
		<Button
			className="w-fit mx-auto bg-red-600 font-bold text-white"
			onClick={handleClick}>
			Delete icon
		</Button>
	);
};

export default DeleteIcon;
