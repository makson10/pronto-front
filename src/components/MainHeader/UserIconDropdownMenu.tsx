'use client';
import {
	Dropdown,
	DropdownTrigger,
	DropdownMenu,
	DropdownItem,
} from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import { useAppDispatch } from '@/store/hooks';
import { removeUser } from '@/store/user/userSlice';
import { removeProfile } from '@/store/profile/profileSlice';
import { Box } from '@mui/material';
import UserProfileIcon from '../common/ProfileIcon';
import axios from 'axios';

interface Props {
	icon: string | null;
	altText: string | null;
}

const UserIconDropdownMenu = ({ icon, altText }: Props) => {
	const dispatch = useAppDispatch();
	const router = useRouter();

	const goToProfilePage = () => router.push('/profile');
	const logOutUser = async () => {
		await axios.post('/api/logout');
		await axios.post('/api/revalidatetag', { tag: 'getuserbysessionrequest' });
		dispatch(removeUser());
		dispatch(removeProfile());

		router.refresh();
	};

	return (
		<Dropdown>
			<DropdownTrigger className="max-h-[40px] max-w-[40px] cursor-pointer">
				<Box>
					<UserProfileIcon
						iconUrl={icon}
						altIconText={altText}
						width={40}
						height={40}
					/>
				</Box>
			</DropdownTrigger>
			<DropdownMenu aria-label="user icon dropdown menu" className="text-black">
				<DropdownItem
					key={'user-icon-dropdown-menu-profile'}
					onClick={goToProfilePage}>
					Profile
				</DropdownItem>
				<DropdownItem
					key={'user-icon-dropdown-menu-log-out'}
					onClick={logOutUser}>
					Log out
				</DropdownItem>
			</DropdownMenu>
		</Dropdown>
	);
};

export default UserIconDropdownMenu;
