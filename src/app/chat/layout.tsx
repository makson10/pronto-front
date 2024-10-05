import ChatsList from '@/components/Chat/ChatsList';
import Footer from '@/components/common/Footer';
import SecondaryHeader from '@/components/common/SecondaryHeader';

interface Props {
	children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
	return (
		<div className="flex flex-col min-h-screen">
			<SecondaryHeader />
			<div className="flex-[2_1_auto] mx-[20%] flex">
				<div className="w-full flex flex-row">
					<ChatsList />
					{children}
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Layout;
