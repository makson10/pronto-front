import ChatHeader from './ChatHeader';
import MessageList from './MessageList';
import NewMessageInput from './NewMessageInput';
import { getUserDataByUserId, getUserIconById } from '@/assets/sessionUtils';

interface Props {
	companionId: number;
}

const CompanionChatWindow = async ({ companionId }: Props) => {
	const companion = await getUserDataByUserId(companionId);
	const iconUrl = await getUserIconById(companionId);

	return (
		<div className="h-full flex flex-col">
			<div className="h-[7.5%]">
				<ChatHeader
					fullName={companion.fullName}
					senderId={companionId}
					iconUrl={iconUrl}
				/>
			</div>
			<MessageList companionId={companionId} />
			<div className="min-h-[8%] max-h-[16%]">
				<NewMessageInput receiverId={companionId} />
			</div>
		</div>
	);
};

export default CompanionChatWindow;
