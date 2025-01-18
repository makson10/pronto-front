import PagesList from '../../components/HomePage/PagesList/PagesList';
import RecommendationPostFlow from '../../components/HomePage/RecommendationPostFlow/RecommendationPostFlow';

const Homepage = () => {
	return (
		<div className="flex-[2_1_auto] flex mx-[15%]">
			<PagesList />
			<RecommendationPostFlow />
		</div>
	);
};

export default Homepage;
