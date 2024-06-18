import Separator from '@/components/ProfileEdit/form/Separator';

interface Props {
	age: number | null;
	dateOfBirth: string | null;
}

const DateOfBirth = ({ age, dateOfBirth }: Props) => {
	if (age && dateOfBirth)
		return (
			<>
				<div>
					<p className="detailInfoTitle">Age</p>
					<p className="detailInfoText">
						{age}, {new Date(dateOfBirth).toLocaleDateString()}
					</p>
				</div>
				<Separator />
			</>
		);
};

export default DateOfBirth;
