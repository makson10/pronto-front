'use client';
import Footer from '@/components/common/Footer';
import SecondaryHeader from '@/components/common/SecondaryHeader';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { PropsWithChildren } from 'react';

const PageWrapper = ({ children }: PropsWithChildren) => {
	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<div className="flex flex-col min-h-screen">
				<SecondaryHeader />
				<div className="flex-[2_1_auto] flex flex-col justify-center items-center px-[18%] py-4">
					{children}
				</div>
				<Footer />
			</div>
		</LocalizationProvider>
	);
};

export default PageWrapper;
