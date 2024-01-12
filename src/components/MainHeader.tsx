import Logo from './Logo';
import RegisterButton from './RegisterButton';
import SearchBox from './SearchBox';

export default function MainHeader() {
	return (
		<div className="w-screen px-[20%] bg-[#222222]">
			<div className="flex flex-row justify-between p-3">
				<div className="flex flex-row justify-center gap-8">
					<Logo />
					<SearchBox />
				</div>
				<RegisterButton />
			</div>
		</div>
	);
}
