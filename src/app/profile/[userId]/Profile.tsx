import ProfileHeader from '@/components/Profile/ProfileHeader';
import PresentsList from '@/components/Profile/Presents/PresentsList';
import ProfileContentWrapper from './ProfileContentWrapper';
import PostsFlow from '@/components/Profile/Posts/PostsFlow';
import Posts from '@/components/Profile/Posts/Posts';
import { Profile as ProfileType } from '@/types/profile';
import { Posts as PostsType } from '@/types/posts';
import axios from 'axios';

interface Props {
	profile: ProfileType;
}

const Profile = async ({ profile }: Props) => {
	const { data: posts } = await axios.post<PostsType>(
		process.env.NEXT_PUBLIC_FRONT_BASE_URL + '/api/getposts',
		profile.profileId.toString()
	);

	return (
		<div className="w-full flex-[1] flex flex-col gap-4">
			<ProfileHeader profile={profile} />
			<ProfileContentWrapper>
				<PostsFlow>
					<Posts author={profile} posts={posts} />
				</PostsFlow>
				<PresentsList profile={profile} />
			</ProfileContentWrapper>
		</div>
	);
};

export default Profile;
