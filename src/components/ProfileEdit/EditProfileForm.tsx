'use client';
import { useState } from 'react';
import SubmitChangesButton from './form/SubmitChangesButton';
import EditAge from './form/EditAge';
import EditProfileFormWrapper from './form/EditProfileFormWrapper';
import EditDescription from './form/EditDescription';
import EditCity from './form/EditCity';
import EditPassword from './form/EditPassword';
import SendVerificationRequest from './form/SendVerificationRequest';
import Separator from './form/Separator';
import { Profile } from '@/types/profile';
import SubmitChangesButtonWrapper from './form/SubmitChangesButtonWrapper';
import ChangeIcon from './form/ChangeIcon';

interface Props {
	defaultFormValues: Profile;
}

export default function EditProfileForm({ defaultFormValues }: Props) {
	const [newDateOfBirth, setNewDateOfBirth] = useState(
		defaultFormValues.dateOfBirth
	);
	const [newDescription, setNewDescription] = useState(
		defaultFormValues.description
	);
	const [newCity, setNewCity] = useState(defaultFormValues.city);
	const [newPassword, setNewPassword] = useState();

	const handleSubmit: React.MouseEventHandler<HTMLButtonElement> = () => {
		const newProfileData = formNewProfileData();
		console.log(newProfileData);
	};

	const formNewProfileData = () => {
		return {
			dateOfBirth: newDateOfBirth,
			description: newDescription,
			city: newCity,
			password: newPassword,
		};
	};
	// add EditIcon field
	// change popup password hint to nextui
	return (
		<div className="mt-8">
			<EditProfileFormWrapper>
				<Separator />
				<ChangeIcon />
				<Separator />
				<EditAge
					dateOfBirth={newDateOfBirth}
					setDateOfBirth={setNewDateOfBirth}
				/>
				<Separator />
				<EditDescription
					description={newDescription}
					setDescription={setNewDescription}
				/>
				<Separator />
				<EditCity city={newCity} setCity={setNewCity} />
				<Separator />
				<EditPassword />
				<Separator />
				<SendVerificationRequest
					isVerifed={defaultFormValues.isVerifed}
					sentVerificationRequest={defaultFormValues.sentVerificationRequest}
				/>
				<Separator />
			</EditProfileFormWrapper>
			<SubmitChangesButtonWrapper>
				<SubmitChangesButton handleSubmit={handleSubmit} />
			</SubmitChangesButtonWrapper>
		</div>
	);
}
