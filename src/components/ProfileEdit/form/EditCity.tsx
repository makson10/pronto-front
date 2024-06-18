import EditField from './EditField';
import { Input } from '@nextui-org/react';

interface Props {
	city: string | null;
	setCity: React.Dispatch<React.SetStateAction<string | null>>;
}

const EditCity = ({ city, setCity }: Props) => {
	return (
		<EditField
			title="City"
			description="Try to guess. Allright. Here you can write your city and it will appear on your profile page">
			<Input size="sm" defaultValue={city || ''} onValueChange={setCity} />
		</EditField>
	);
};

export default EditCity;
