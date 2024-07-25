import RegisterButton from './RegisterButton';
import UserIconDropdownMenu from './UserIconDropdownMenu';
import {
	getUserDataBySession,
	getProfile,
	getSessionIdFromCookie,
} from '@/assets/sessionUtils';

const UserIcon = async () => {
	const doesUserLogined = getSessionIdFromCookie();
	if (!doesUserLogined) return <RegisterButton />;

	const user = await getUserDataBySession();
	const profile = await getProfile(user.id);
	return (
		<UserIconDropdownMenu
			icon={profile.icon}
			altText={user.firstName[0].toUpperCase()}
		/>
	);
};

export default UserIcon;
