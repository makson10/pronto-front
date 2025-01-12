'use client';
import FirstLine from './MainInfo/FirstLine';
import Description from './MainInfo/Description';
import Address from './MainInfo/Address';
import DateOfBirth from './MainInfo/DateOfBirth';
import { useAppSelector } from '@/store/hooks';

const ProfileMainInfo = () => {
	const { age, dateOfBirth, description, city } = useAppSelector(
		(state) => state.requestedProfile.data
	)!;

	return (
		<div className="h-fit flex flex-col gap-4">
			<FirstLine />
			<div className="flex flex-col gap-2">
				<Description description={description} />
				<Address city={city} />
				<DateOfBirth age={age} dateOfBirth={dateOfBirth} />
			</div>
		</div>
	);
};

export default ProfileMainInfo;
