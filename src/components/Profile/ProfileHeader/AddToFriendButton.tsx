'use client';
import StyledButton from '@/components/StyledButton/StyledButton';

const AddToFriendButton = () => {
	const handleClick = () => console.log('fucking clicked');

	return (
		<StyledButton onClick={handleClick} aria-label="add-to-friend-button">
			Add to friends
		</StyledButton>
	);
};

export default AddToFriendButton;
