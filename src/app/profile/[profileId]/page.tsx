import ProfileHeader from '@/components/Profile/ProfileHeader/ProfileHeader';
import ContentWrapper from './ContentWrapper';
import PostsFlow from '@/components/Profile/Posts/PostsFlow';
import Posts from '@/components/Profile/Posts/Posts';
import Presents from '@/components/Profile/Presents/Presents';

const Profile = async () => {
	return (
		<div className="w-full flex-[1] flex flex-col gap-4">
			<ProfileHeader />
			<ContentWrapper>
				<PostsFlow>
					<Posts />
				</PostsFlow>
				<Presents />
			</ContentWrapper>
		</div>
	);
};

export default Profile;
