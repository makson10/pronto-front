import ProfileHeader from '@/components/Profile/ProfileHeader/ProfileHeader';
import ContentWrapper from './ContentWrapper';
import PostsFlow from '@/components/Profile/Posts/PostsFlow';
import Posts from '@/components/Profile/Posts/Posts';
import FullProfileInfoAndPresents from '@/components/Profile/FullProfileInfoAndPresents/FullProfileInfoAndPresents';

const Profile = async () => {
	return (
		<div className="w-full flex-[1] flex flex-col gap-4">
			<ProfileHeader />
			<ContentWrapper>
				<PostsFlow>
					<Posts />
				</PostsFlow>
				<FullProfileInfoAndPresents />
			</ContentWrapper>
		</div>
	);
};

export default Profile;
