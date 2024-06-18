import { getUserIdBySession, getProfile } from '@/app/api/sessionUtils';
import EditPage from '@/components/ProfileEdit/EditPage';

const Edit = async () => {
	const userId = await getUserIdBySession();
	const profile = await getProfile(userId);

	return <EditPage profile={profile} />;
};

export default Edit;
