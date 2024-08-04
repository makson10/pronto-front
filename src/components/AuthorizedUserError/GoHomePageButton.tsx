import usePageNavigation from '@/hooks/usePageNavigation';

const GoHomePageButton = () => {
	const { goToHomePage } = usePageNavigation();

	return (
		<button
			className="button bg-white text-black px-4 pt-[0.6rem] pb-[0.7rem] rounded-[5px] text-base"
			onClick={goToHomePage}>
			Go home page
		</button>
	);
};

export default GoHomePageButton;
