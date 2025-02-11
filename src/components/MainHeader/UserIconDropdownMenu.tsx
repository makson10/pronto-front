'use client';
import axios from 'axios';
import {
	Dropdown,
	DropdownTrigger,
	DropdownMenu,
	DropdownItem,
} from '@nextui-org/react';
import UserProfileIcon from '../common/ProfileIcon';
import { useRouter } from 'next/navigation';
import { useAppDispatch } from '@/store/hooks';
import { removeUser } from '@/store/user/userSlice';
import { removeProfile } from '@/store/profile/profileSlice';

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
			<DropdownTrigger className="max-h-[45px] max-w-[45px] cursor-pointer">
				<div>
					<UserProfileIcon
						iconUrl={icon}
						altIconText={altText}
						width={45}
						height={45}
					/>
				</div>
			</DropdownTrigger>
			<DropdownMenu aria-label="user icon dropdown menu" className="text-black">
				<DropdownItem onClick={goToProfilePage}>Profile</DropdownItem>
				<DropdownItem onClick={logOutUser}>Log out</DropdownItem>
			</DropdownMenu>
		</Dropdown>
	);
};

export default UserIconDropdownMenu;
