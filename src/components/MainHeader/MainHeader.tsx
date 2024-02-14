'use client';
import { store } from '@/context/store';
import Logo from '../Logo';
import RegisterButton from '../RegisterButton';
import SearchBox from './SearchBox';
import UserIconDropdownMenu from './UserIconDropdownMenu';

export default function MainHeader() {
	const { user } = store.getState();

	return (
		<div className="w-screen px-[20%] bg-[--header-bg-color]">
			<div className="min-h-[64px] flex flex-row justify-between p-2">
				<div className="flex flex-row justify-center gap-8">
					<Logo />
					<SearchBox />
				</div>

				{user ? (
					<UserIconDropdownMenu name={user.firstName} />
				) : (
					<RegisterButton />
				)}
			</div>
		</div>
	);
}
