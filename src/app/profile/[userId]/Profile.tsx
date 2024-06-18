import ProfileHeader from '@/components/Profile/ProfileHeader';
import PresentsList from '@/components/Profile/Presents/PresentsList';
import ProfileContentWrapper from './ProfileContentWrapper';
import PostsFlow from '@/components/Profile/Posts/PostsFlow';
import { Profile as ProfileType } from '@/types/profile';

interface Props {
	profile: ProfileType;
}

const Profile = ({ profile }: Props) => {
	return (
		<div className="w-full flex-[1] flex flex-col gap-4">
			<ProfileHeader profile={profile} />
			<ProfileContentWrapper>
				<PostsFlow />
				<PresentsList profile={profile} />
			</ProfileContentWrapper>
		</div>
	);
};

export default Profile;
