import Logo from '../Logo';
import SearchBox from './SearchBox';
import UserIcon from './UserIcon';

export default function MainHeader() {
	return (
		<div className="w-screen px-[20%] bg-[--header-bg-color]">
			<div className="min-h-[64px] flex flex-row justify-between p-2">
				<div className="flex flex-row justify-center gap-8">
					<Logo />
					<SearchBox />
				</div>
				<UserIcon />
			</div>
		</div>
	);
}
