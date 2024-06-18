import Footer from '@/components/Footer';
import SecondaryHeader from '@/components/SecondaryHeader';

interface Props {
	children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
	return (
		<div className="flex flex-col min-h-screen">
			<SecondaryHeader />
			<div className="flex-[2_1_auto] flex flex-col justify-center items-center">
				{children}
			</div>
			<Footer />
		</div>
	);
};

export default Layout;
