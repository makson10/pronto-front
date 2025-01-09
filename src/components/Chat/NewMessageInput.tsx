'use client';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { useAppSelector } from '@/store/hooks';
import Image from 'next/image';
import socket from '@/socket/socket';

interface Props {
	receiverId: number;
}

const NewMessageInput = ({ receiverId }: Props) => {
	const user = useAppSelector((state) => state.user.data);
	const [newMessageText, setNewMessageText] = useState('');
	const textareaRef = useRef<HTMLTextAreaElement>(null);

	const handleInput = (event: ChangeEvent<HTMLTextAreaElement>) =>
		setNewMessageText(event.target.value);

	const sendNewMessage = () => {
		if (!newMessageText && !textareaRef.current?.value) return;

		const payload = {
			senderId: user?.id,
			receiverId: receiverId,
			text: newMessageText || textareaRef.current?.value,
		};

		socket.emit('newMessage', payload);
		clearInput();
	};

	const clearInput = () => {
		if (textareaRef.current) {
			textareaRef.current.value = '';
		}

		setNewMessageText('');
	};

	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.ctrlKey && event.key === 'Enter') sendNewMessage();
		};

		document.addEventListener('keydown', handleKeyDown);

		return () => {
			document.removeEventListener('keydown', handleKeyDown);
		};
	}, []);

	return (
		<div className="h-full bg-[#2e2525] flex flex-row">
			<button className="px-2">
				<Image
					src="https://img.icons8.com/ios-filled/ffffff/100/attach.png"
					alt="#"
					width={40}
					height={40}
				/>
			</button>
			<textarea
				className="bg-transparent w-full p-2 resize-none focus:outline-none"
				placeholder="Type a message..."
				ref={textareaRef}
				onChange={handleInput}
			/>
			<button className="pl-2 pr-4" onClick={sendNewMessage}>
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
