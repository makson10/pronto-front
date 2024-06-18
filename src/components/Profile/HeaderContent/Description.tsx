import Separator from '@/components/ProfileEdit/form/Separator';

interface Props {
	description: string | null;
}

const Description = ({ description }: Props) => {
	if (description)
		return (
			<>
				<div>
					<p className="detailInfoTitle">Description</p>
					<p className="detailInfoText">{description}</p>
				</div>
				<Separator />
			</>
		);
};

export default Description;
