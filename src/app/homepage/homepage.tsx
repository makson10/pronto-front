import PagesList from '../../components/HomePage/pagesList/pagesList';
import RecommendationPostFlow from '../../components/HomePage/recommendationPostFlow/recommendationPostFlow';

const Homepage = () => {
	return (
		<div className="flex-[2_1_auto] flex mx-[15%]">
			<PagesList />
			<RecommendationPostFlow />
		</div>
	);
};

export default Homepage;
