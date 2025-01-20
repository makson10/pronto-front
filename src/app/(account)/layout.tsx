'use client';
import { PropsWithChildren } from 'react';
import Footer from '@/components/common/Footer';
import SecondaryHeader from '@/components/common/SecondaryHeader';
import { Box } from '@mui/material';
import { useAppSelector } from '@/store/hooks';

const Layout = ({ children }: PropsWithChildren) => {
	const isAuthorized = useAppSelector((state) => state.user.authorized);
	if (isAuthorized) {
		throw new Error(
			"It seems you're trying to access authorization page while being authorized. Please, log out first or go to another page",
			{ cause: 'Authorization page access denied' },
		);
	}

	return (
		<Box display={'flex'} flexDirection={'column'} minHeight={'100vh'}>
			<SecondaryHeader />
			<Box
				flex={'2 1 auto'}
				display={'flex'}
				flexDirection={'column'}
				justifyContent={'center'}
				alignItems={'center'}>
				{children}
			</Box>
			<Footer />
		</Box>
	);
};

export default Layout;
