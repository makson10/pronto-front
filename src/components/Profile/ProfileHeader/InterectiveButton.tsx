'use client';
import { useAppSelector } from '@/store/hooks';
import AddToFriendButton from './AddToFriendButton';
import EditProfileButton from './EditProfileButton';

const InterectiveButton = () => {
	const userId = useAppSelector((state) => state.user.data?.id);
	const profileId = useAppSelector(
		(state) => state.requestedProfile.data?.profileId
	);

	return (
		<div className="mr-4 flex-[1] flex flex-row justify-end items-center">
			{userId === profileId ? <EditProfileButton /> : <AddToFriendButton />}
		</div>
	);
};

export default InterectiveButton;
