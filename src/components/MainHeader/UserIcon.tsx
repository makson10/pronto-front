'use client';
import { useAppSelector } from '@/store/hooks';
import RegisterButton from './RegisterButton';
import UserIconDropdownMenu from './UserIconDropdownMenu';

const UserIcon = () => {
	const user = useAppSelector((state) => state.user.data);
	const profile = useAppSelector((state) => state.profile.data);

	if (!user || !profile) return <RegisterButton />;

	return (
		<UserIconDropdownMenu
			icon={profile.icon}
			altText={user.firstName[0].toUpperCase()}
		/>
	);
};

export default UserIcon;
