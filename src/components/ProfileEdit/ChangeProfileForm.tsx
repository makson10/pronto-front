import SubmitChangesButton from './SubmitChangesButton';
import ChangeAge from './form/ChangeAge';
import ChangeProfileFormWrapper from './form/ChangeProfileFormWrapper';
import ChangeDescription from './form/ChangeDescription';
import ChangeCity from './form/ChangeCity';
import ChangePassword from './form/ChangePassword';
import SendVerificationRequest from './form/SendVerificationRequest';
import { UserProfile } from '@/types/userProfile';
import Separator from './form/Separator';

interface Props {
	defaultFormValues: UserProfile;
}

export default function ChangeProfileForm({ defaultFormValues }: Props) {
	// make useState data gathering

	return (
		<div className="mt-8">
			<ChangeProfileFormWrapper>
				<Separator />
				<ChangeAge defaultDateOfBirth={defaultFormValues.dateOfBirth} />
				<Separator />
				<ChangeDescription defaultDescription={defaultFormValues.description} />
				<Separator />
				<ChangeCity defaultCity={defaultFormValues.city} />
				<Separator />
				<ChangePassword />
				<Separator />
				<SendVerificationRequest />
				<Separator />
			</ChangeProfileFormWrapper>
			<SubmitChangesButton />
		</div>
	);
}
