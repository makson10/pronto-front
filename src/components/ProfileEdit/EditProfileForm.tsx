'use client';
import { useState } from 'react';
import SubmitChangesButton from './form/SubmitChangesButton';
import EditAge from './form/EditAge';
import EditProfileFormWrapper from './form/EditProfileFormWrapper';
import EditDescription from './form/EditDescription';
import EditCity from './form/EditCity';
import ChangePassword from './form/ChangePassword';
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

	const handleSubmit: React.MouseEventHandler<HTMLButtonElement> = () => {
		const newProfileData = formNewProfileData();
		console.log(newProfileData);
	};

	const formNewProfileData = () => {
		return {
			dateOfBirth: newDateOfBirth,
			description: newDescription,
			city: newCity,
		};
	};

	// TODO:
	//? change order of form fields
	//? make pretty animate message
	//? add showing server error through signup|login

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
				<EditDescription
					description={newDescription}
					setDescription={setNewDescription}
				/>
				<EditCity city={newCity} setCity={setNewCity} />
				<SubmitChangesButtonWrapper>
					<SubmitChangesButton handleSubmit={handleSubmit} />
				</SubmitChangesButtonWrapper>
				<Separator />
				<ChangePassword />
				<Separator />
				<SendVerificationRequest
					isVerifed={defaultFormValues.isVerifed}
					sentVerificationRequest={defaultFormValues.sentVerificationRequest}
				/>
			</EditProfileFormWrapper>
		</div>
	);
}
