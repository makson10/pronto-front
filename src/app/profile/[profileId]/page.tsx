import ProfileHeader from '@/components/Profile/ProfileHeader';
import ProfileContentWrapper from './ProfileContentWrapper';
import PostsFlow from '@/components/Profile/Posts/PostsFlow';
import Posts from '@/components/Profile/Posts/Posts';
import Presents from '@/components/Profile/Presents';

const Profile = async () => {
	return (
		<div className="w-full flex-[1] flex flex-col gap-4">
			<ProfileHeader />
			<ProfileContentWrapper>
				<PostsFlow>
					<Posts />
				</PostsFlow>
				<Presents />
			</ProfileContentWrapper>
		</div>
	);
};

export default Profile;
