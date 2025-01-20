import { useAppDispatch } from '@/store/hooks';
import { removeUser } from '@/store/user/userSlice';
import { removeProfile } from '@/store/profile/profileSlice';
import { Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const LogOutButton = () => {
	const router = useRouter();
	const dispatch = useAppDispatch();

	const handleClick = async () => {
		await makeLogOutRequest();
		await resetAllSessionStates();
		router.refresh();
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
		dispatch(removeUser());
		dispatch(removeProfile());
	};

	return (
		<Button
			variant="contained"
			sx={{
				width: '50%',
				height: '100%',
			}}
			onClick={handleClick}>
			Log out
		</Button>
	);
};

export default LogOutButton;
