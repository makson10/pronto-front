import { FullUser } from '@/types/userTypes';
import UserProfileIcon from './UserProfileIcon';
import UserInfo from './UserInfo';
import AddToFriendButton from './AddToFriendButton';

interface Props {
	user: FullUser;
}

export default function ProfileHeader({ user }: Props) {
	const userProfileInfo = {
		name: user.fullName,
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam urna ante, scelerisque non libero id, feugiat ultrices dolor. Donec porta quam nisl, vitae sollicitudin urna lobortis id. In tempor auctor congue. Sed sollicitudin pulvinar sapien, vitae commodo tellus. Sed at risus dolor. Curabitur molestie lacinia massa, sit amet posuere purus tincidunt sit amet. Donec in eros ut erat pulvinar tincidunt nec vitae augue. Pellentesque vel euismod ipsum.',
		createdAt: user.createdAt,
		city: 'LA',
		verifedUser: true,
		icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPohw7byleZM-nDxl2_tQKKKlms8p2yM0XJtsNhWPGrw&s',
	};

	return (
		<div className="w-full flex min-h-[300px] h-1/2 bg-slate-700 rounded-lg border-[--border-main-color] border-[4px]">
			<div className="relative flex flex-row gap-6 w-full mt-auto bg-[--main-color] rounded-t-2xl rounded-b-md min-h-[144px] p-4">
				<UserProfileIcon
					iconUrl={userProfileInfo.icon}
					userName={user.firstName}
				/>
				<UserInfo user={userProfileInfo} />
				<div className="mr-4 flex-[1] flex flex-row justify-end items-center">
					<AddToFriendButton />
				</div>
			</div>
		</div>
	);
}
