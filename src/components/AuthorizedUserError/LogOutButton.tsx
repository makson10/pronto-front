import { store } from '@/context/store';
import usePageNavigation from '@/hooks/usePageNavigation';
import axios from 'axios';

const LogOutButton = () => {
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
		await axios.post('/api/logout');
	};

	const makeGetUserRequestRevalidation = async () => {
		await axios.post('/api/revalidatetag', { tag: 'getuserbysessionrequest' });
	};

	const removeUserDataFromStore = () => {
		store.getState().setInitialValues!();
	};

	return (
		<button
			onClick={handleClick}
			className="button px-4 pt-[0.6rem] pb-[0.7rem] rounded-[5px] text-base"
			style={{ backgroundColor: 'rgb(29 78 216)' }}>
			Log out
		</button>
	);
};

export default LogOutButton;
