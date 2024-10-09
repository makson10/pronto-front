'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Chat } from '@/types/chat';

interface Props {
	chat: Chat;
}

const ChatItem = ({
	chat: { companionId, companionName, lastMessageText },
}: Props) => {
	const router = useRouter();
	const handleChatItemClick = () => router.push(`/chat/${id}`);

	return (
		<div
			className="w-full flex items-center h-[60px] bg-[#3E3232] cursor-pointer p-2 px-3"
			onClick={handleChatItemClick}>
			<div className="flex-shrink-0 mr-3">
				<div className="w-10 h-10 bg-gray-500 rounded-full">
					<Image
						className="rounded-full"
						src={
							'https://static.wikia.nocookie.net/roblox-famed-games/images/c/c8/Guest.jpg/revision/latest?cb=20130915214150'
						}
						alt="#"
						width={100}
						height={100}
					/>
				</div>
			</div>
			<div className="flex flex-col">
				<span className="text-white font-bold text-lg">{name}</span>
				<span className="text-gray-300 text-base">{lastMessage}</span>
			</div>
		</div>
	);
};

export default ChatItem;
