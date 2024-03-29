import ProfileHeader from '@/components/Profile/ProfileHeader';
import ProfileContentWrapper from '@/components/Profile/ProfileContentWrapper';
import PostsFlow from '@/components/Profile/PostsFlow';
import DetailUserInformation from '@/components/Profile/DetailUserInformation';
import { Profile } from '@/types/profile';

interface Props {
	profile: Profile;
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
