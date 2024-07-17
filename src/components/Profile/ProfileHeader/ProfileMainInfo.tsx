import FirstLine from './ProfileMainInfo/FirstLine';
import Description from './ProfileMainInfo/Description';
import Address from './ProfileMainInfo/Address';
import DateOfBirth from './ProfileMainInfo/DateOfBirth';
import { store } from '@/context/store';

const ProfileMainInfo = () => {
	const { age, dateOfBirth, description, city } = store.getState().profile!;

	return (
		<div className="flex flex-col gap-1">
			<FirstLine />
			<Description description={description} />
			<Address city={city} />
			<DateOfBirth age={age} dateOfBirth={dateOfBirth} />
		</div>
	);
};

export default ProfileMainInfo;
