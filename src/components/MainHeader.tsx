'use client';
import { store } from '@/context/store';
import Logo from './Logo';
import RegisterButton from './RegisterButton';
import SearchBox from './SearchBox';
import UserIcon from './UserIcon';

export default function MainHeader() {
	const { user } = store.getState();

	return (
		<div className="w-screen px-[20%] bg-[#222222]">
			<div className="flex flex-row justify-between p-3">
				<div className="flex flex-row justify-center gap-8">
					<Logo />
					<SearchBox />
				</div>
				{user ? <UserIcon name={user.firstName} /> : <RegisterButton />}
			</div>
		</div>
	);
}
