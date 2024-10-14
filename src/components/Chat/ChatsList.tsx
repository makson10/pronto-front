'use client';
import { store } from '@/context/store';
import ChatItem from './ChatItem';
import { Chats } from '@/types/chat';

interface Props {
	chats: Chats;
}

const ChatsList = ({ chats }: Props) => {
	const profile = store.getState().profile!;
	store.setState({ profile: { ...profile, chats } });

	return (
		<div className="h-full bg-[#503C3C]">
			<div className="min-w-full flex flex-col justify-center items-center text-white text-lg">
				{chats.map((chat) => (
					<ChatItem key={chat.chatId} chat={chat} />
				))}
			</div>
		</div>
	);
};

export default ChatsList;
