import { Profile } from '@/types/profile';
import DateOfBirth from './DetailInfo/DateOfBirth';
import City from './DetailInfo/City';
import Description from './DetailInfo/Description';
import Presents from './DetailInfo/Presents';

interface Props {
	profile: Profile;
}

export default function DetailInfo({ profile }: Props) {
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
}

const defaultPresents = [
	{ title: 'Create award', recievedAt: new Date().toString() },
];
