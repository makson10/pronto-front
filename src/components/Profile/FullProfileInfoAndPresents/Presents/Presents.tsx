import Present from './Present';
import { store } from '@/context/store';

const Presents = () => {
	const authorPresents = store.getState().profile?.presents;

	return (
		<div className="flex flex-col gap-2">
			<p className="font-bold text-base">Presents</p>
			{!authorPresents?.length && <p>No presents yet!</p>}
			<div
				className="flex flex-row gap-4 pb-2 overflow-x-auto"
				id="scrollbar-without-bg">
				{authorPresents?.map((present, index) => (
					<Present key={index} present={present} />
				))}
			</div>
		</div>
	);
};

export default Presents;
