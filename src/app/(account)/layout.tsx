'use client';
import { PropsWithChildren } from 'react';
import Footer from '@/components/common/Footer';
import SecondaryHeader from '@/components/common/SecondaryHeader';
import { Box } from '@mui/material';
import { useAppSelector } from '@/store/hooks';
import AuthorizedUserError from '@/components/AuthorizedUserError/AuthorizedUserError';

const Layout = ({ children }: PropsWithChildren) => {
	const isAuthorized = useAppSelector((state) => state.user.authorized);

	return (
		<Box display={'flex'} flexDirection={'column'} minHeight={'100vh'}>
			<SecondaryHeader />
			<Box
				flex={'2 1 auto'}
				display={'flex'}
				flexDirection={'column'}
				justifyContent={'center'}
				alignItems={'center'}>
				{isAuthorized ? <AuthorizedUserError /> : children}
			</Box>
			<Footer />
		</Box>
	);
};

export default Layout;
