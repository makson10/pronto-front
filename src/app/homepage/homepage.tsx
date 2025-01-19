import PagesList from '@/components/HomePage/PagesList/PagesList';
import RecommendationPostFlow from '@/components/HomePage/RecommendationPostFlow/RecommendationPostFlow';
import { Box } from '@mui/material';

const Homepage = () => {
	return (
		<Box flex={'2 1 auto'} display="flex" mx={'15%'}>
			<PagesList />
			<RecommendationPostFlow />
		</Box>
	);
};

export default Homepage;
