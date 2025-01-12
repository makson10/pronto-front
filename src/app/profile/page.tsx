import { getUserIdBySession } from '@/store/user/userUtils';
import { RedirectType, redirect } from 'next/navigation';

const Profile = async () => {
	const userId = await getUserIdBySession();
	if (!userId) throw new Error('You are not logged in yet');
	if (userId) redirect('/profile/' + userId, RedirectType.replace);
};

export default Profile;
