import { PropsWithChildren } from 'react';
import Footer from '@/components/common/Footer';
import SecondaryHeader from '@/components/common/SecondaryHeader';

const Layout = ({ children }: PropsWithChildren) => {
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
