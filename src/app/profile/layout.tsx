'use client';
import MainHeader from '@/components/MainHeader/MainHeader';
import SecondaryHeader from '@/components/SecondaryHeader';
import Footer from '@/components/Footer';
import { store } from '@/context/store';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

interface Props {
	children: React.ReactNode;
	params: {
		userId: string;
	};
}

const Layout = ({ children, params: { userId } }: Props) => {
	const storedUserId = store.getState().user?.id;

	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<div className="flex flex-col min-h-screen">
				{!userId || parseInt(userId) === storedUserId ? (
					<SecondaryHeader />
				) : (
					<MainHeader />
				)}
				<div className="flex-[2_1_auto] flex flex-col justify-center items-center px-[18%] py-4">
					{children}
				</div>
				<Footer />
			</div>
		</LocalizationProvider>
	);
};

export default Layout;
