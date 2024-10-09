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
		<div className="w-[25%] bg-[#503C3C]">
			<div className="min-w-full flex justify-center items-center text-white text-lg">
				<ChatItem name="Maks 2" lastMessage="fuck" id={23884065} />
			</div>
		</div>
	);
};

export default ChatsList;
