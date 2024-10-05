import NoChatSelected from './NoChatSelected';
import CompanionChatWindow from './CompanionChatWindow';
import { getUserDataByUserId } from '@/assets/sessionUtils';

interface Props {
	companionId?: number;
}

const ChatWindow = async ({ companionId }: Props) => {
	const companion = companionId && (await getUserDataByUserId(companionId));

	return (
		<div className="min-h-full w-[70%] bg-[#3E3232]">
			{companionId ? (
				<CompanionChatWindow companion={companion} />
			) : (
				<NoChatSelected />
			)}
		</div>
	);
};

export default ChatWindow;
