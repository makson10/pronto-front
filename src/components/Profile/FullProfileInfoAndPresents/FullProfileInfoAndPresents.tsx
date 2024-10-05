import Separator from '@/components/common/Separator';
import FullProfileInfo from './FullProfileInfo/FullProfileInfo';
import Presents from './Presents/Presents';

const FullProfileInfoAndPresents = () => {
	return (
		<div className="w-[35%] h-fit bg-[--main-color] border-[4px] border-[--border-main-color] rounded-xl p-4 flex flex-col gap-4">
			<FullProfileInfo />
			<Separator />
			<Presents />
		</div>
	);
};

export default FullProfileInfoAndPresents;
