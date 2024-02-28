import RegisterButton from '../RegisterButton';
import UserIconDropdownMenu from './UserIconDropdownMenu';
import { getUserDataBySession, getProfile } from '@/app/api/sessionUtils';

const UserIcon = async () => {
	const user = await getUserDataBySession();
	if (!user) return <RegisterButton />;

	const profile = await getProfile(user.id);
	return (
		<UserIconDropdownMenu
			icon={profile.icon}
			altText={user.firstName[0].toUpperCase()}
		/>
	);
};

export default UserIcon;
