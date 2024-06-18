import { Profile } from '@/types/profile';
import DateOfBirth from '../HeaderContent/DateOfBirth';
import City from '../HeaderContent/City';
import Description from '../HeaderContent/Description';
import Presents from '../Presents';

interface Props {
	profile: Profile;
}

const defaultPresents = [
	{ title: 'Create award', recievedAt: new Date().toString() },
];

const PresentsList = ({ profile }: Props) => {
	return (
		<div
			className="w-[35%] h-fit bg-[--main-color] border-[4px] border-[--border-main-color] rounded-xl p-4 flex flex-col gap-4"
			id="detail-user-info">
			<DateOfBirth age={profile.age} dateOfBirth={profile.dateOfBirth} />
			<City city={profile.city} />
			<Description description={profile.description} />
			<Presents presents={defaultPresents} />
		</div>
	);
};

export default PresentsList;
