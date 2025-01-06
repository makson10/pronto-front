import ChatWindow from '@/components/Chat/ChatWindow';

interface Props {
	params: {
		companionId: string;
	};
}

export default function CompanionChatPage({ params }: Props) {
	const { companionId } = params;
	return <ChatWindow companionId={parseInt(companionId)} />;
}
