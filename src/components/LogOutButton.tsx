import { store } from '@/context/store';
import usePageNavigation from '@/hooks/usePageNavigation';
import axios from 'axios';

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
		<button onClick={handleClick} style={LogOutButtonStype}>
			Log out
		</button>
	);
}

const LogOutButtonStype: React.CSSProperties = {
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	backgroundColor: 'blue',
	color: 'white',
	paddingLeft: '1rem',
	paddingRight: '1rem',
	paddingTop: '0.6rem',
	paddingBottom: '0.7rem',
	borderRadius: '5px',
	fontSize: '1rem',
	WebkitBorderRadius: '.5rem',
};
