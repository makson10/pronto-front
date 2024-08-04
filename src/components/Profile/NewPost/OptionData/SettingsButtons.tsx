import PasteTextButton from './PasteTextButton';
import AttachPictureButton from './AttachPictureButton';
import { ChangeEvent } from 'react';

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
		<div className="flex flex-row gap-2">
			<PasteTextButton pasteFunction={pasteText} />
			<AttachPictureButton attachFunction={attachPicture} />
		</div>
	);
};

export default SettingsButtons;
