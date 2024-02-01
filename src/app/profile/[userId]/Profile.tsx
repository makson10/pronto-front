import ProfileHeader from '@/components/Profile/ProfileHeader';
import { FullUser } from '@/types/userTypes';

interface Props {
	user: FullUser;
}

export default function Profile({ user }: Props) {
	return (
		<div className="flex-[1] flex w-full">
			<ProfileHeader user={user} />
		</div>
	);
}

// <div className="border">
// 	{/* <header></header> */}
// 	{/* <wrapper>
//     <posts />
//     <sideinfo />
// </wrapper> */}
// </div>
