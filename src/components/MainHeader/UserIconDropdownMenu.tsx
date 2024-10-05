'use client';
import { resetUserData } from '@/context/storeUtils';
import usePageNavigation from '@/hooks/usePageNavigation';
import axios from 'axios';
import {
	Dropdown,
	DropdownTrigger,
	DropdownMenu,
	DropdownItem,
} from '@nextui-org/react';
import UserProfileIcon from '../common/ProfileIcon';
import { useRouter } from 'next/navigation';

interface Props {
	icon: string | null;
	altText: string | null;
}

const UserIconDropdownMenu = ({ icon, altText }: Props) => {
	const router = useRouter();

	const goToProfilePage = () => router.push('/profile');
	const logOutUser = async () => {
		await axios.post('/api/logout');
		await axios.post('/api/revalidatetag', { tag: 'getuserbysessionrequest' });
		resetUserData();
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
