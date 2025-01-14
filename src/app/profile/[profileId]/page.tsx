import RequestedProfileProvider from '@/store/requestedProfile/RequestedProfileProvider';
import ProfileHeader from '@/components/Profile/ProfileHeader/ProfileHeader';
import ContentWrapper from './ContentWrapper';
import PostsFlow from '@/components/Profile/Posts/PostsFlow';
import Posts from '@/components/Profile/Posts/Posts';
import FullProfileInfoAndPresents from '@/components/Profile/FullProfileInfoAndPresents/FullProfileInfoAndPresents';
import { getProfile } from '@/store/profile/profileUtils';

interface Props {
	params: Promise<{ profileId: string }>;
}

const Profile = async ({ params }: Props) => {
	const profileId = parseInt((await params).profileId);
	const profile = await getProfile(profileId);

	return (
		<RequestedProfileProvider profile={profile}>
			<ProfileHeader />
			<ContentWrapper>
				<PostsFlow>
					<Posts profileId={profileId} />
				</PostsFlow>
				<FullProfileInfoAndPresents />
			</ContentWrapper>
		</RequestedProfileProvider>
	);
};

export default Profile;
