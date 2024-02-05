import UserProfileIcon from '../UserProfileIcon';
import UserInfo from './UserInfo';
import AddToFriendButton from './AddToFriendButton';
import { UserProfile } from '@/types/userProfile';

interface Props {
	profile: UserProfile;
}

export default function ProfileHeader({ profile }: Props) {
	return (
		<div className="w-full flex min-h-[300px] h-1/2 bg-slate-700 rounded-lg border-[--border-main-color] border-[4px]">
			<div className="relative flex flex-row gap-6 w-full mt-auto bg-[--main-color] rounded-t-2xl rounded-b-md min-h-[144px] p-4">
				<UserProfileIcon
					iconUrl={profile.icon}
					altIconText={profile.name[0].toUpperCase()}
					needToLiftUp={true}
				/>
				<UserInfo profile={profile} />
				<AddToFriendButtonBlock />
			</div>
		</div>
	);
}

const AddToFriendButtonBlock = () => (
	<div className="mr-4 flex-[1] flex flex-row justify-end items-center">
		<AddToFriendButton />
	</div>
);
