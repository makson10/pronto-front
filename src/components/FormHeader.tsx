import Logo from './Logo';

export default function FormHeader() {
	return (
		<div className="w-screen min-h-[64px] bg-[--header-bg-color] flex flex-row justify-center py-3">
			<Logo />
		</div>
	);
}
