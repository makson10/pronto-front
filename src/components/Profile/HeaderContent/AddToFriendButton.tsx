'use client';

import { Button } from '@nextui-org/react';

const AddToFriendButton = () => {
	const handleClick = () => console.log('fucking clicked');

	return (
		<Button
			className="button"
			onClick={handleClick}
			aria-label="add-to-friend-button">
			Add to friends
		</Button>
	);
};

export default AddToFriendButton;
