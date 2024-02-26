import { Button } from '@nextui-org/react';
import axios from 'axios';

interface Props {
	newIcon: File;
	setNewIcon: React.Dispatch<React.SetStateAction<File | null>>;
	setNeedToShowSuccessChangeIconMessage: React.Dispatch<
		React.SetStateAction<boolean>
	>;
}

const SubmitChangeIcon = ({
	newIcon,
	setNewIcon,
	setNeedToShowSuccessChangeIconMessage,
}: Props) => {
	const submitChangeIcon = async () => {
		await axios.post('/api/storenewicon', newIcon);
		setNeedToShowSuccessChangeIconMessage(true);
		setNewIcon(null);
	};

	return (
		<Button
			className="font-bold text-white bg-green-500"
			onClick={submitChangeIcon}>
			Save
		</Button>
	);
};

export default SubmitChangeIcon;
