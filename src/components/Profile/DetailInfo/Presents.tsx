interface Props {
	presents: Presents;
}

export default function Presents({ presents }: Props) {
	if (presents)
		return (
			<>
				<div>
					<p className="detailInfoTitle">Presents</p>
					<p className="flex flex-row gap-2">
						{presents.map((present) => {
							return <p>{present.title}</p>;
						})}
					</p>
				</div>
			</>
		);
}
