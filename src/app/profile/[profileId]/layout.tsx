import { PropsWithChildren } from 'react';
import Footer from '@/components/common/Footer';
import LayoutHeader from '@/components/Profile/LayoutHeader/LayoutHeader';

const Layout = ({ children }: PropsWithChildren) => {
	return (
		<div className="flex flex-col min-h-screen">
			<LayoutHeader />
			<div className="flex-[2_1_auto] flex flex-col justify-center items-center px-[18%] py-4">
				<div className="w-full flex-[1] flex flex-col gap-4">{children}</div>
			</div>
			<Footer />
		</div>
	);
};

export default Layout;
