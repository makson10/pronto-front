import PresentsList from './Presents/PresentsList';

const Presents = () => {
	return (
		<div
			className="w-[35%] h-fit bg-[--main-color] border-[4px] border-[--border-main-color] rounded-xl p-4 flex flex-col gap-4"
			id="detail-user-info">
			<p className="detailInfoTitle">Presents</p>
			{/* <PresentsList /> */}
			<p className="flex flex-row gap-2">Cuming soon</p>
		</div>
	);
};

export default Presents;
