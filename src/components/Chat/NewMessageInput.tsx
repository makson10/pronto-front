'use client';
import Image from 'next/image';
import { ChangeEvent, useEffect, useState } from 'react';
import { store } from '@/context/store';
import { io } from 'socket.io-client';

const socket = io('http://localhost:4000');

const NewMessageInput = () => {
	const user = store.getState().user;
	const [newMessageText, setNewMessageText] = useState('');

	useEffect(() => {
		socket.on('updateMessages', (data: any) => {
			console.log(data);
		});

		return () => {
			socket.off('updateMessages');
		};
	}, []);

	const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
		setNewMessageText(event.target.value);
	};

	const sendNewMessage = () => {
		if (!newMessageText) return;

		const payload = {
			senderId: user?.id,
			receiverId: 111111,
			text: newMessageText,
		};

		socket.emit('newMessage', payload);
	};

	return (
		<div className="h-full bg-[#2e2525] flex flex-row" onClick={sendNewMessage}>
			<button className="px-1">
				<Image
					src="https://img.icons8.com/ios-filled/ffffff/100/attach.png"
					alt="#"
					width={40}
					height={40}
				/>
			</button>
			<input
				className="bg-transparent w-full px-2 focus:outline-none"
				onChange={handleInput}
			/>
			<button className="px-2" onClick={sendNewMessage}>
				<Image
					src="https://img.icons8.com/external-creatype-outline-colourcreatype/ffffff/64/external-paper-user-interface-creatype-outline-colourcreatype.png"
					alt="#"
					width={40}
					height={40}
				/>
			</button>
		</div>
	);
};

export default NewMessageInput;
