import { getProfile } from '@/assets/sessionUtils';
import Profile from './Profile';

interface Props {
	params: {
		userId: string;
	};
}

const ProfilePage = async ({ params: { userId } }: Props) => {
	const profile = await getProfile(userId);
	return <Profile profile={profile} />;
};

export default ProfilePage;
