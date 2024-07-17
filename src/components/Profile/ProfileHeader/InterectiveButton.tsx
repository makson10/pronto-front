'use client';
import { store } from '@/context/store';
import AddToFriendButton from './AddToFriendButton';
import EditProfileButton from './EditProfileButton';

const InterectiveButton = () => {
	const userId = store.getState().user?.id;
	const profileId = store.getState().profile?.profileId;

	return (
		<div className="mr-4 flex-[1] flex flex-row justify-end items-center">
			{userId === profileId ? <EditProfileButton /> : <AddToFriendButton />}
		</div>
	);
};

export default InterectiveButton;
