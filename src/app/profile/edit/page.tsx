import { getUserIdBySession, getUserProfile } from '@/app/api/sessionUtils';
import EditPage from '@/components/ProfileEdit/EditPage';

export default async function Edit() {
	const userId = await getUserIdBySession();
	const profile = await getUserProfile(userId);

	return <EditPage profile={profile} />;
}
