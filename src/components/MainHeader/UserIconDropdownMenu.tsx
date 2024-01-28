import { resetUserData } from '@/context/storeUtils';
import usePageNavigation from '@/hooks/usePageNavigation';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import axios from 'axios';

interface Props {
	children: React.ReactNode;
}

export default function UserIconDropdownMenu({ children }: Props) {
	const { goToPage, refreshPage } = usePageNavigation();

	const goToProfilePage = () => goToPage('/profile');
	const logOutUser = async () => {
		await axios.post('/api/logout').then(console.log);
		await axios.post('/api/revalidategetuserrequest').then(console.log);
		resetUserData();
		refreshPage();
	};

	return (
		<DropdownMenu.Root>
			<DropdownMenu.Trigger asChild>
				<div className="rounded-full">{children}</div>
			</DropdownMenu.Trigger>
			<DropdownMenu.Portal>
				<DropdownMenu.Content
					style={menuContentStyle}
					className={menuContextAnimationClassName}
					sideOffset={5}>
					<DropdownMenu.Item style={menuItemStyle} onSelect={goToProfilePage}>
						<p className="cursor-pointer hover:underline">Profile</p>
					</DropdownMenu.Item>
					<DropdownMenu.Separator style={menuSeparatorStyle} />
					<DropdownMenu.Item style={menuItemStyle} onSelect={logOutUser}>
						<p className="cursor-pointer hover:underline">Log out</p>
					</DropdownMenu.Item>
				</DropdownMenu.Content>
			</DropdownMenu.Portal>
		</DropdownMenu.Root>
	);
}

const menuContentStyle: React.CSSProperties = {
	minWidth: '120px',
	backgroundColor: 'white',
	borderRadius: '6px',
	padding: '5px',
	boxShadow:
		'0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
};

const menuContextAnimationClassName =
	'transition-all will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade';

const menuItemStyle: React.CSSProperties = {
	fontSize: '.9rem',
	lineHeight: 1,
	color: 'var(--violet-11)',
	borderRadius: '3px',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	height: '25px',
	padding: '0 5px',
	position: 'relative',
	userSelect: 'none',
	outline: 'none',
};

const menuSeparatorStyle: React.CSSProperties = {
	height: '1px',
	backgroundColor: 'var(--violet-6)',
	margin: '5px',
};
