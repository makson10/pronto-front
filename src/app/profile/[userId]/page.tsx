import { getUserDataByUserId } from '@/app/api/sessionUtils';
import Profile from './Profile';

interface Props {
	params: {
		userId: string;
	};
}

export default async function ProfilePage({ params: { userId } }: Props) {
	const user = await getUserDataByUserId(parseInt(userId));
	return <Profile user={user} />;
}
