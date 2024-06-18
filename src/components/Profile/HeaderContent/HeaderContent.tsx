'use client';
import Name from './UserInfo/Name';
import Description from './UserInfo/Description';
import Address from './UserInfo/Address';
import { Profile } from '@/types/profile';

interface Props {
	profile: Profile;
}

const HeaderContent = ({ profile }: Props) => {
	return (
		<div className="flex flex-col gap-1">
			<Name data={profile} />
			<Description description={profile.description} />
			<Address city={profile.city} />
		</div>
	);
};

export default HeaderContent;
