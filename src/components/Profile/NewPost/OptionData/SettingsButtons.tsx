import PasteTextButton from './PasteTextButton';
import AttachPictureButton from './AttachPictureButton';
import { ChangeEvent } from 'react';
import { Box } from '@mui/material';

interface Props {
	setText: React.Dispatch<React.SetStateAction<string>>;
	setPicture: React.Dispatch<React.SetStateAction<File | null>>;
}

const SettingsButtons = ({ setText, setPicture }: Props) => {
	const attachPicture = (event: ChangeEvent<HTMLInputElement>) => {
		if (event.target.files) setPicture(event.target.files[0]);
	};

	const pasteText = async () => {
		await navigator.clipboard.readText().then((textFromClipboard) => {
			setText((text) => text + textFromClipboard);
		});
	};

	return (
		<Box sx={{ display: 'flex', flexDirection: 'row', gap: '0.5rem' }}>
			<PasteTextButton pasteFunction={pasteText} />
			<AttachPictureButton attachFunction={attachPicture} />
		</Box>
	);
};

export default SettingsButtons;
