import Header from './Header';
import EditProfileForm from './EditProfileForm';
import { Profile } from '@/types/profile';

interface Props {
	profile: Profile;
}

export default function EditPage({ profile }: Props) {
	return (
		<div className="w-full flex-[1] px-[15%] py-[3%]">
			<Header
				iconUrl={profile.icon}
				name={profile.name}
				profileId={profile.profileId}
			/>
			<EditProfileForm defaultFormValues={profile} />
		</div>
	);
}
