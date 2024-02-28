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
import SubmitChangesButtonWrapper from './form/SubmitChangesButtonWrapper';
import { Profile } from '@/types/profile';
import { ShowMessageBox } from '../MessageBox';
import axios from 'axios';

interface Props {
	сhangeIcon: React.ReactNode;
	defaultFormValues: Profile;
}

export default function EditProfileForm({
	сhangeIcon,
	defaultFormValues,
}: Props) {
	const [
		needToShowSuccessEditDataMessage,
		setNeedToShowSuccessEditDataMessage,
	] = useState(false);

	const [newDateOfBirth, setNewDateOfBirth] = useState(
		defaultFormValues.dateOfBirth
	);
	const [newDescription, setNewDescription] = useState(
		defaultFormValues.description
	);
	const [newCity, setNewCity] = useState(defaultFormValues.city);

	const handleSubmit: React.MouseEventHandler<HTMLButtonElement> = async () => {
		const newProfileData = formNewProfileData();
		await axios.post('/api/editprofiledata', newProfileData);
		setNeedToShowSuccessEditDataMessage(true);
	};

	const formNewProfileData = () => {
		return {
			dateOfBirth: newDateOfBirth,
			description: newDescription,
			city: newCity,
		};
	};

	return (
		<>
			{needToShowSuccessEditDataMessage && (
				<ShowMessageBox message="Data was changed" />
			)}
			<div className="mt-8">
				<EditProfileFormWrapper>
					<Separator />
					{сhangeIcon}
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
		</>
	);
}
