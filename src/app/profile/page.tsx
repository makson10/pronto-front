import { getUserIdBySession } from '../api/sessionUtils';
import { RedirectType, redirect } from 'next/navigation';

const Profile = async () => {
	let userId = '';

	try {
		userId = await getUserIdBySession();
	} catch (error) {
		throw new Error('Not available to unauthorized users');
	}

	if (userId) redirect('/profile/' + userId, RedirectType.replace);
};

export default Profile;
