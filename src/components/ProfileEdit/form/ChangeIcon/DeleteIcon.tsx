'use client';
import { useEffect, useState } from 'react';
import { ShowMessageBox } from '@/components/MessageBox';
import { Button } from '@nextui-org/react';
import axios from 'axios';

const DeleteIcon = () => {
	const [needToShowDeleteIconMessage, setNeedToShowDeleteIconMessage] =
		useState<boolean>(false);

	useEffect(() => {
		setTimeout(() => {
			setNeedToShowDeleteIconMessage(false);
		}, 4000);
	}, [needToShowDeleteIconMessage]);

	const handleClick = async () => {
		await axios.post('/api/deleteicon');
		setNeedToShowDeleteIconMessage(true);
	};

	return (
		<>
			{needToShowDeleteIconMessage && (
				<ShowMessageBox message="Icon was deleted" />
			)}
			<Button
				className="w-fit mx-auto bg-red-600 font-bold text-white"
				onClick={handleClick}>
				Delete icon
			</Button>
		</>
	);
};

export default DeleteIcon;
