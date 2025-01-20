import Footer from '@/components/common/Footer';
import MainHeader from '@/components/MainHeader/MainHeader';
import Homepage from './homepage/homepage';
import { Box } from '@mui/material';

const Home = () => {
	return (
		<Box display={'flex'} flexDirection={'column'} minHeight={'100vh'}>
			<MainHeader />
			<Homepage />
			<Footer />
		</Box>
	);
};

export default Home;
