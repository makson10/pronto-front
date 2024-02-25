import { store } from '@/context/store';
import usePageNavigation from '@/hooks/usePageNavigation';
import axios from 'axios';
import style from '@/styles/logOutButton.module.scss';

export default function LogOutButton() {
	const { refreshPage } = usePageNavigation();

	const handleClick = async () => {
		await makeLogOutRequest();
		await resetAllSessionStates();
		refreshPage();
	};

	const resetAllSessionStates = async () => {
		removeUserDataFromStore();
		await makeGetUserRequestRevalidation();
	};

	const makeLogOutRequest = async () => {
		await axios.post('/api/logout').then(console.log);
	};

	const makeGetUserRequestRevalidation = async () => {
		await axios
			.post('/api/revalidatetag', { tag: 'getuserbysessionrequest' })
			.then(console.log);
	};

	const removeUserDataFromStore = () => {
		store.getState().setInitialValues!();
	};

	return (
		<button onClick={handleClick} className={style['log-out-button']}>
			Log out
		</button>
	);
}
