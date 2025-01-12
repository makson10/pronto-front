import Header from './Header';
import EditProfileForm from './EditProfileForm';
import { Profile } from '@/types/profile';
import ChangeIcon from './form/ChangeIcon';

interface Props {
	profile: Profile;
}

const EditPage = ({ profile }: Props) => {
	return (
		<div className="w-full flex-[1] px-[10%] py-[3%]">
			<Header
				iconUrl={profile.icon}
				name={profile.name}
				profileId={profile.profileId}
			/>
			<EditProfileForm
				defaultFormValues={profile}
				changeIcon={<ChangeIcon />}
			/>
		</div>
	);
};

export default EditPage;
