import NoChatSelected from './NoChatSelected';
import CompanionChatWindow from './CompanionChatWindow';

interface Props {
	companionId?: number;
}

const ChatWindow = ({ companionId }: Props) => {
	return (
		<div className="w-[75%] bg-[#3E3232]">
			{companionId ? (
				<CompanionChatWindow companionId={companionId} />
			) : (
				<NoChatSelected />
			)}
		</div>
	);
};

export default ChatWindow;
