import { Spinner } from '@nextui-org/react';
import style from '@/styles/loadingSpinner.module.scss';

const LoadingSpinner = () => {
	return (
		<div className={style['overlay']}>
			<Spinner color="danger" size="lg" className={style['spinner']} />
			<p className={style['letter']}>p</p>
		</div>
	);
};

export default LoadingSpinner;
