import DateOfBirth from '@/components/Profile/ProfileHeader/MainInfo/DateOfBirth';
import Description from '@/components/Profile/ProfileHeader/MainInfo/Description';
import Address from '@/components/Profile/ProfileHeader/MainInfo/Address';
import { useAppSelector } from '@/store/hooks';

const FullProfileInfo = () => {
	const profile = useAppSelector((state) => state.profile.data);

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
