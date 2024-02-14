import { store } from '@/context/store';
import { resetUserData } from '@/context/storeUtils';
import usePageNavigation from '@/hooks/usePageNavigation';
import axios from 'axios';
import {
	Dropdown,
	DropdownTrigger,
	DropdownMenu,
	DropdownItem,
} from '@nextui-org/react';
import UserIcon from './UserIcon';

interface Props {
	name: string;
}

export default function UserIconDropdownMenu({ name }: Props) {
	const userId = store.getState().user?.id;
	const { goToPage, refreshPage } = usePageNavigation();

	const goToProfilePage = () => goToPage('/profile/' + userId);
	const logOutUser = async () => {
		await axios.post('/api/logout');
		await axios.post('/api/revalidateTag', { tag: 'getuserbysessionrequest' });
		resetUserData();
		refreshPage();
	};

	return (
		<Dropdown>
			<DropdownTrigger>
				<div>
					<UserIcon name={name[0]} />
				</div>
			</DropdownTrigger>
			<DropdownMenu className="text-black">
				<DropdownItem onClick={goToProfilePage}>Profile</DropdownItem>
				<DropdownItem onClick={logOutUser}>Log out</DropdownItem>
			</DropdownMenu>
		</Dropdown>
	);
}
