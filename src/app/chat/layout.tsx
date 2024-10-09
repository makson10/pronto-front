import { getUserChats } from '@/assets/sessionUtils';
import ChatsList from '@/components/Chat/ChatsList';
import SecondaryHeader from '@/components/common/SecondaryHeader';

interface Props {
	children: React.ReactNode;
}

const Layout = async ({ children }: Props) => {
	const chats = await getUserChats();

	return (
		<div className="flex flex-col min-h-screen">
			<SecondaryHeader />
			<div className="flex-[2_1_auto] mx-[20%] flex">
				<div className="w-full flex flex-row">
					<div className="w-[25%] flex flex-col">
						<HelpnessButton />
						<ChatsList chats={chats} />
					</div>
					{children}
				</div>
			</div>
		</div>
	);
};

export default Layout;
