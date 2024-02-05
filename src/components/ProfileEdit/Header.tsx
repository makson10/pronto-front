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
				width={50}
				height={50}
			/>
			<div>
				<p className="text-2xl">{name}</p>
				<p className="text-sm text-gray-600">{profileId}</p>
			</div>
		</div>
	);
}
