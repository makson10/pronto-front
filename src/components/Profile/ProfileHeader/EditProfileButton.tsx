'use client';
import StyledButton from '@/components/StyledButton/StyledButton';
import { useRouter } from 'next/navigation';

const EditProfileButton = () => {
	const router = useRouter();
	const handleClick = () => router.push('/profile/edit');

	return (
		<StyledButton onClick={handleClick} aria-label="edit-profile-button">
			Edit profile
		</StyledButton>
	);
};

export default EditProfileButton;
