import { getUserIconById } from '@/assets/sessionUtils';
import ChatHeader from './ChatHeader';
import NewMessageInput from './NewMessageInput';
import { FullUser } from '@/types/user';

interface Props {
	companion: FullUser;
}

const CompanionChatWindow = async ({ companion }: Props) => {
	const iconUrl = await getUserIconById(companion.id);

	return (
		<div className="h-full flex flex-col">
			<div className="h-[60px]">
				<ChatHeader fullName={companion.fullName} iconUrl={iconUrl} />
			</div>
			<div className="flex-[2_1_auto]"></div>
			<div className="h-[8%]">
				<NewMessageInput />
			</div>
		</div>
	);
};

export default CompanionChatWindow;
