import DetailUserInformation from '@/components/Profile/DetailUserInformation';
import PostsFlow from '@/components/Profile/PostsFlow';
import ProfileContentWrapper from '@/components/Profile/ProfileContentWrapper';
import ProfileHeader from '@/components/Profile/ProfileHeader';
import { UserProfile } from '@/types/userProfile';

interface Props {
	profile: UserProfile;
}

export default function Profile({ profile }: Props) {
	return (
		<div className="w-full flex-[1] flex flex-col gap-4">
			<ProfileHeader profile={profile} />
			<ProfileContentWrapper>
				<PostsFlow />
				<DetailUserInformation />
			</ProfileContentWrapper>
		</div>
	);
}
