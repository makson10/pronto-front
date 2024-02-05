import { UserProfile } from '@/types/userProfile';
import Header from './Header';

interface Props {
	profile: UserProfile;
}

export default function EditPage({ profile }: Props) {
	return (
		<div className="p-8 w-full flex-[1]">
			<Header
				iconUrl={profile.icon}
				name={profile.name}
				profileId={profile.profileId}
			/>
		</div>
	);
}

{
	/* 
<Header>...</Header>
<FormWrapper>
<ChangeAgeForm></ChangeAgeForm>
<ChangeDescriptionForm></ChangeDescriptionForm>
<ChangeCityForm></ChangeCityForm>
<SendVerificationRequestForm></SendVerificationRequestForm>
<ChangePasswordForm></ChangePasswordForm>
</FormWrapper> 
*/
}
