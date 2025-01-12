import { getUserIdBySession } from '@/store/user/userUtils';
import { getProfile } from '@/store/profile/profileUtils';
import EditPage from '@/components/ProfileEdit/EditPage';
import PageWrapper from './PageWrapper';
import { Profile } from '@/types/profile';

const Edit = async () => {
	const userId = await getUserIdBySession();
	const profile = (await getProfile(userId)) as Profile;

	return (
		<PageWrapper>
			<EditPage profile={profile} />;
		</PageWrapper>
	);
};

export default Edit;
