import Logo from '../common/Logo';
import SearchBox from './SearchBox';
import UserIcon from './UserIcon';

const MainHeader = () => {
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
};

export default MainHeader;
