import { ShowMessageBox } from '@/components/MessageBox';
import { Button } from '@nextui-org/react';
import axios from 'axios';
import { useEffect, useState } from 'react';

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
	const [needToShowOverlimitError, setNeedToShowOverlimitError] =
		useState<boolean>(false);

	useEffect(() => {
		if (!needToShowOverlimitError) return;

		setTimeout(() => {
			setNeedToShowOverlimitError(false);
		}, 4000);
	}, [needToShowOverlimitError]);

	const checkNewIconValid = async () => {
		if (!checkNewIconSize()) {
			return setNeedToShowOverlimitError(true);
		}

		submitChangeIcon();
	};

	const checkNewIconSize = () => {
		return newIcon.size < 4 * 1024 * 1024;
	};

	const submitChangeIcon = async () => {
		await axios.post('/api/storenewicon', newIcon);
		setNeedToShowSuccessChangeIconMessage(true);
		setNewIcon(null);
	};

	return (
		<>
			{needToShowOverlimitError && (
				<ShowMessageBox
					isError={true}
					message="Icon must not be larger than 4 mb"
				/>
			)}
			<Button
				className="font-bold text-white bg-green-500"
				onClick={checkNewIconValid}>
				Save
			</Button>
		</>
	);
};

export default SubmitChangeIcon;
