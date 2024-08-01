import DateOfBirth from '../ProfileHeader/MainInfo/DateOfBirth';
import Description from '../ProfileHeader/MainInfo/Description';
import Address from '../ProfileHeader/MainInfo/Address';
import { store } from '@/context/store';

interface Props {
	presents: Presents;
}

const defaultPresents = [
	{ title: 'Create award', recievedAt: new Date().toString() },
];

const Presents = () => {
	const profile = store.getState().profile!;

	return (
		<div className="w-[35%] h-fit bg-[--main-color] border-[4px] border-[--border-main-color] rounded-xl p-4 flex flex-col gap-4">
			<DateOfBirth age={profile.age} dateOfBirth={profile.dateOfBirth} />
			<Address city={profile.city} />
			<Description description={profile.description} />
			<p className="detailInfoTitle">Presents</p>
		</div>
	);
};

export default Presents;
