'use client';
import { User } from '@nextui-org/react';

interface Props {
	iconUrl: string | null;
	name: string;
	profileId: number;
}

export default function Header({ iconUrl, name, profileId }: Props) {
	return (
		<User
			name={<p className="text-lg">{name}</p>}
			description={<p className="text-base opacity-60">id: {profileId}</p>}
			avatarProps={{ src: iconUrl!, name: name[0], size: 'lg' }}
		/>
	);
}
