'use client';
import { Profile } from '@/types/profile';
import NameInfo from './UserInfo/NameInfo';
import Description from './UserInfo/Description';
import AddressInfo from './UserInfo/AddressInfo';

interface Props {
	profile: Profile;
}

export default function UserInfo({ profile }: Props) {
	return (
		<div className="flex flex-col gap-1">
			<NameInfo data={profile} />
			<Description description={profile.description} />
			<AddressInfo city={profile.city} />
		</div>
	);
}
