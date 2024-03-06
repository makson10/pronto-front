import Separator from '@/components/ProfileEdit/form/Separator';

interface Props {
	city: string | null;
}

export default function City({ city }: Props) {
	if (city)
		return (
			<>
				<div>
					<p className="detailInfoTitle">City</p>
					<p className="detailInfoText">{city}</p>
				</div>
				<Separator />
			</>
		);
}
