import DateOfBirth from '../ProfileHeader/ProfileMainInfo/DateOfBirth';
import City from '../ProfileHeader/shit/City';
import Description from '../ProfileHeader/shit/Description';
import { store } from '@/context/store';

interface Props {
	presents: Presents;
}

const defaultPresents = [
	{ title: 'Create award', recievedAt: new Date().toString() },
];

const PresentsList = () => {
	const profile = store.getState().profile!;

	return (
		<div>
			<DateOfBirth age={profile.age} dateOfBirth={profile.dateOfBirth} />
			<City city={profile.city} />
			<Description description={profile.description} />
		</div>
	);
};

export default PresentsList;
