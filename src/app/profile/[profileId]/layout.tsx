import { PropsWithChildren } from 'react';
import Footer from '@/components/common/Footer';
import LayoutHeader from '@/components/Profile/LayoutHeader/LayoutHeader';
import { Box } from '@mui/material';

const Layout = ({ children }: PropsWithChildren) => {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				minHeight: '100vh',
			}}>
			<LayoutHeader />
			<Box
				sx={{
					flex: '2 1 auto',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					px: '18%',
					py: '1rem',
				}}>
				<Box
					sx={{
						width: '100%',
						flex: '1',
						display: 'flex',
						flexDirection: 'column',
						gap: '1rem',
					}}>
					{children}
				</Box>
			</Box>
			<Footer />
		</Box>
	);
};

export default Layout;
