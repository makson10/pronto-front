import PagesList from './pagesList/pagesList';
import RecommendationPostFlow from './recommendationPostFlow/recommendationPostFlow';

const Homepage = () => {
	return (
		<div className="flex-[2_1_auto] flex mx-[15%]">
			<PagesList />
			<RecommendationPostFlow />
		</div>
	);
};

export default Homepage;
