import { PropsWithChildren } from 'react';
import ChatsList from '@/components/Chat/ChatsList';
import SecondaryHeader from '@/components/common/SecondaryHeader';

const Layout = ({ children }: PropsWithChildren) => {
	return (
		<div className="flex flex-col min-h-screen">
			<SecondaryHeader />
			<div className="flex-[2_1_auto] mx-[20%] flex">
				<div className="w-full flex flex-row">
					<ChatsList />
					{children}
				</div>
			</div>
		</div>
	);
};

export default Layout;
