import Header from './Header';
import ChangeProfileForm from './ChangeProfileForm';
import { UserProfile } from '@/types/userProfile';

interface Props {
	profile: UserProfile;
}

export default function EditPage({ profile }: Props) {
	return (
		<div className="w-full flex-[1] px-[15%] py-[3%]">
			<Header
				iconUrl={profile.icon}
				name={profile.name}
				profileId={profile.profileId}
			/>
			<ChangeProfileForm defaultFormValues={profile} />
		</div>
	);
}
