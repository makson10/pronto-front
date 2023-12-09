import RegisterButton from './RegisterButton';
import SearchBox from './SearchBox';

function Logo() {
	return (
		<div className="flex flex-col justify-center">
			<img className="w-[110px] h-[30px]" src="/long_logo.png" alt="#" />
		</div>
	);
}

export default function Header() {
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
