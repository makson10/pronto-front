'use client';
import UserProfileIcon from '../UserProfileIcon';
import UserInfo from './UserInfo';
import AddToFriendButton from './AddToFriendButton';
import { Profile } from '@/types/profile';
import { store } from '@/context/store';
import EditProfileButton from './EditProfileButton';

interface Props {
	profile: Profile;
}

interface ProfileIconProps {
	iconUrl?: string | null;
	altIconText?: string | null;
}

export default function ProfileHeader({ profile }: Props) {
	const userId = store.getState().user?.id;

	return (
		<div className="w-full flex min-h-[300px] h-1/2 bg-slate-700 rounded-xl border-[--border-main-color] border-[4px]">
			<div className="relative flex flex-row gap-6 w-full mt-auto bg-[--main-color] rounded-t-2xl rounded-b-lg max-h-[150px] p-4">
				<ProfileIcon iconUrl={profile.icon} altIconText={profile.name[0]} />
				<UserInfo profile={profile} />
				<div className="mr-4 flex-[1] flex flex-row justify-end items-center">
					{userId === profile.profileId ? (
						<EditProfileButton />
					) : (
						<AddToFriendButton />
					)}
				</div>
			</div>
		</div>
	);
}

const ProfileIcon = ({
	iconUrl = null,
	altIconText = null,
}: ProfileIconProps) => {
	return (
		<div>
			<div className="relative -top-[75%]" aria-label="profile-icon">
				<UserProfileIcon
					iconUrl={iconUrl}
					altIconText={altIconText}
					makeBorder={true}
				/>
			</div>
		</div>
	);
};
