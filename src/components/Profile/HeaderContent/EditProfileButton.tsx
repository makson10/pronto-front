'use client';
import { Button } from '@nextui-org/react';
import { useRouter } from 'next/navigation';

const EditProfileButton = () => {
	const router = useRouter();
	const handleClick = () => router.push('/profile/edit');

	return (
		<Button
			className="button"
			onClick={handleClick}
			aria-label="edit-profile-button">
			Edit profile
		</Button>
	);
};

export default EditProfileButton;
