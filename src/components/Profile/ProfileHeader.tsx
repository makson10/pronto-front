'use client';
import HeaderContent from './HeaderContent/HeaderContent';
import AddToFriendButton from './HeaderContent/AddToFriendButton';
import ProfileIcon from './HeaderContent/ProfileHeaderIcon';
import EditProfileButton from './HeaderContent/EditProfileButton';
import { store } from '@/context/store';
import { Profile } from '@/types/profile';

interface Props {
	profile: Profile;
}

interface InterectiveButtonProps {
	profileId: number;
}

const ProfileHeader = ({ profile }: Props) => {
	return (
		<div className="w-full flex min-h-[300px] h-1/2 bg-slate-700 rounded-xl border-[--border-main-color] border-[4px]">
			<div className="relative flex flex-row gap-6 w-full mt-auto bg-[--main-color] rounded-t-2xl rounded-b-lg max-h-[150px] p-4">
				<ProfileIcon iconUrl={profile.icon} altIconText={profile.name[0]} />
				<HeaderContent profile={profile} />
				<InterectiveButton profileId={profile.profileId} />
			</div>
		</div>
	);
};

const InterectiveButton = ({ profileId }: InterectiveButtonProps) => {
	const userId = store.getState().user?.id;

	return (
		<div className="mr-4 flex-[1] flex flex-row justify-end items-center">
			{userId === profileId ? <EditProfileButton /> : <AddToFriendButton />}
		</div>
	);
};

export default ProfileHeader;
