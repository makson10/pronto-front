import UserProfileIcon from '../UserProfileIcon';

interface Props {
	iconUrl: string | null;
	name: string;
	profileId: number;
}

export default function Header({ iconUrl, name, profileId }: Props) {
	return (
		<div className="flex flex-row gap-4">
			<UserProfileIcon
				iconUrl={iconUrl}
				altIconText={name[0].toUpperCase()}
				width={80}
				height={80}
			/>
			<div className="flex flex-col justify-center">
				<p className="text-2xl">{name}</p>
				<p className="text-sm text-gray-600">id: {profileId}</p>
			</div>
		</div>
	);
}
