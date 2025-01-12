import { useEffect, useState } from 'react';
import { Button } from '@nextui-org/react';
import { ShowMessageBox } from '@/components/common/MessageBox';
import { useRouter } from 'next/navigation';
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
	const [needToShowOverlimitError, setNeedToShowOverlimitError] =
		useState<boolean>(false);
	const router = useRouter();

	useEffect(() => {
		if (!needToShowOverlimitError) return;

		setTimeout(() => {
			setNeedToShowOverlimitError(false);
		}, 4000);
	}, [needToShowOverlimitError]);

	const checkNewIconValid = async () => {
		if (!checkNewIconSize()) return setNeedToShowOverlimitError(true);
		submitChangeIcon();
	};

	const checkNewIconSize = () => newIcon.size < 4 * 1024 * 1024;

	const submitChangeIcon = async () => {
		await axios.post('/api/storenewicon', newIcon);
		setNeedToShowSuccessChangeIconMessage(true);
		setNewIcon(null);
		router.refresh();
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
