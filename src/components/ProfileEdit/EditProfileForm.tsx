'use client';
import { useEffect, useState } from 'react';
import SubmitChangesButton from './form/SubmitChangesButton';
import EditAge from './form/EditAge';
import EditProfileFormWrapper from './form/EditProfileFormWrapper';
import EditDescription from './form/EditDescription';
import EditCity from './form/EditCity';
import ChangePassword from './form/ChangePassword';
import SendVerificationRequest from './form/SendVerificationRequest';
import Separator from '../common/Separator';
import SubmitChangesButtonWrapper from './form/SubmitChangesButtonWrapper';
import { Profile } from '@/types/profile';
import { ShowMessageBox } from '../common/MessageBox';
import axios from 'axios';

interface Props {
	changeIcon: React.ReactNode;
	defaultFormValues: Profile;
}

const EditProfileForm = ({ changeIcon, defaultFormValues }: Props) => {
	const [
		needToShowSuccessEditDataMessage,
		setNeedToShowSuccessEditDataMessage,
	] = useState(false);

	const [newDateOfBirth, setNewDateOfBirth] = useState(
		defaultFormValues.dateOfBirth,
	);
	const [newDescription, setNewDescription] = useState(
		defaultFormValues.description,
	);
	const [newCity, setNewCity] = useState(defaultFormValues.city);

	const [errorWithDescription, setErrorWithDescription] = useState(false);

	const handleSubmit: React.MouseEventHandler<HTMLButtonElement> = async () => {
		if (!isDescriptionValid()) return setErrorWithDescription(true);

		const newProfileData = formNewProfileData();
		await axios.post('/api/editprofiledata', newProfileData);
		setNeedToShowSuccessEditDataMessage(true);
	};

	const isDescriptionValid = () => {
		return newDescription && newDescription.length < 255;
	};

	const formNewProfileData = () => {
		return {
			dateOfBirth: newDateOfBirth,
			description: newDescription,
			city: newCity,
		};
	};

	useEffect(() => setErrorWithDescription(false), [newDescription]);

	return (
		<>
			{needToShowSuccessEditDataMessage && (
				<ShowMessageBox message="Data was changed" />
			)}
			<div className="mt-8">
				<EditProfileFormWrapper>
					<Separator />
					{changeIcon}
					<Separator />
					<EditAge
						dateOfBirth={newDateOfBirth}
						setDateOfBirth={setNewDateOfBirth}
					/>
					<EditDescription
						description={newDescription}
						setDescription={setNewDescription}
						errorWithDescription={errorWithDescription}
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
};

export default EditProfileForm;
