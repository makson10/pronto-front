import { getUserProfile } from '@/app/api/sessionUtils';
import Profile from './Profile';

interface Props {
	params: {
		userId: string;
	};
}

export default async function ProfilePage({ params: { userId } }: Props) {
	const profile = await getUserProfile(userId);
	return <Profile profile={profile} />;
}
