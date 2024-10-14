'use client';
import { useEffect, useRef, useState } from 'react';
import Message from './Message';
import { store } from '@/context/store';
import socket from '@/socket/socket';
import { Message as MessageType } from '@/types/chat';

interface MessageListProps {
	companionId: number;
}

const MessageList = ({ companionId }: MessageListProps) => {
	const userId = store.getState().user?.id;
	const [messages, setMessages] = useState<MessageType[] | null>(null);
	const messageListRef = useRef<HTMLDivElement>(null);
	const didMount = useRef(false);

	const handleMessages = (fetchedMessages: MessageType[]) =>
		setMessages(fetchedMessages);

	const liftChatDown = () => {
		if (!messageListRef.current) return;

		if (
			messageListRef.current.scrollTop === 0 ||
			messageListRef.current.scrollHeight -
				messageListRef.current.clientHeight -
				messageListRef.current.scrollTop <
				120
		) {
			messageListRef.current.scrollTo({
				top: messageListRef.current.scrollHeight,
			});
		}
	};

	useEffect(() => {
		if (!didMount.current) {
			didMount.current = true;
			return;
		}

		socket?.emit('getMessages', { senderId: userId, receiverId: companionId });
		socket?.on('updateMessages', handleMessages);

		return () => {
			socket?.off('updateMessages', handleMessages);
		};
	}, [companionId]);

	useEffect(() => liftChatDown(), [messages]);

	return (
		<div
			className="p-3 shadow-lg h-[625px] overflow-y-auto hide-scrollbar flex flex-col gap-4"
			ref={messageListRef}>
			{!messages ? (
				<div className="m-auto text-lg">Loading...</div>
			) : !messages.length ? (
				<div className="m-auto text-lg">No messages yet</div>
			) : (
				messages.map((message, index) => (
					<Message key={index} message={message} />
				))
			)}
		</div>
	);
};

export default MessageList;
