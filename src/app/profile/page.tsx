import { getUserIdBySession } from '@/assets/sessionUtils';
import { RedirectType, redirect } from 'next/navigation';

const Profile = async () => {
	const userId = await getUserIdBySession();
	if (userId) redirect('/profile/' + userId, RedirectType.replace);
};

export default Profile;
