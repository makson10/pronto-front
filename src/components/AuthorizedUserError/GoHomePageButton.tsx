import usePageNavigation from '@/hooks/usePageNavigation';
import style from '@/styles/authorizedUserError.module.scss';

const GoHomePageButton = () => {
	const { goToHomePage } = usePageNavigation();

	return (
		<button className={style['go-home-button']} onClick={goToHomePage}>
			Go home page
		</button>
	);
};

export default GoHomePageButton;
