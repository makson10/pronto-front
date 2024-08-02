import DateOfBirth from '@/components/Profile/ProfileHeader/MainInfo/DateOfBirth';
import Description from '@/components/Profile/ProfileHeader/MainInfo/Description';
import Address from '@/components/Profile/ProfileHeader/MainInfo/Address';
import { store } from '@/context/store';

const FullProfileInfo = () => {
	const profile = store.getState().profile!;

	return (
		<div className="flex flex-col gap-2" id="fullProfileInfo">
			<DateOfBirth age={profile.age} dateOfBirth={profile.dateOfBirth} />
			<Address city={profile.city} />
			<Description
				description={profile.description}
				showEntireDescription={true}
			/>
		</div>
	);
};

export default FullProfileInfo;
