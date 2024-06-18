interface Props {
	presents: Presents;
}

const Presents = ({ presents }: Props) => {
	if (!presents) return;

	return (
		<>
			<div>
				<p className="detailInfoTitle">Presents</p>
				<p className="flex flex-row gap-2">
					{/* {presents.map((present, index) => (
						<p key={index}>{present.title}</p>
					))} */}
					Cuming soon
				</p>
			</div>
		</>
	);
};

export default Presents;
