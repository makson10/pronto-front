import ChatWindow from '@/components/Chat/ChatWindow';

interface Props {
	params: {
		companionId: string;
	};
}

const CompanionChatPage = ({ params }: Props) => {
	const { companionId } = params;
	return <ChatWindow companionId={parseInt(companionId)} />;
};

export default CompanionChatPage;
