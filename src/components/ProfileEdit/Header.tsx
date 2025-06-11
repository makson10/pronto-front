'use client';
import { User } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import StyledButton from '../StyledButton/StyledButton';

interface Props {
	iconUrl: string | null;
	name: string;
	profileId: number;
}

const Header = ({ iconUrl, name, profileId }: Props) => {
	return (
		<div className="flex flex-row justify-between">
			<User
				name={<p className="text-lg">{name}</p>}
				description={<p className="text-base opacity-60">id: {profileId}</p>}
				avatarProps={{ src: iconUrl!, name: name[0], size: 'lg' }}
			/>
			<div className="flex flex-col justify-center">
				<GoBackButton />
			</div>
		</div>
	);
};

const GoBackButton = () => {
	const router = useRouter();
	const handleClick = () => router.back();

	return <StyledButton onClick={handleClick}>Go back</StyledButton>;
};

export default Header;
