import PasteTextButton from './PasteTextButton';
import AttachPictureButton from './AttachPictureButton';

interface Props {
	setText: React.Dispatch<React.SetStateAction<string>>;
	setPicture: React.Dispatch<React.SetStateAction<File | null>>;
}

const SettingsButtons = ({ setText, setPicture }: Props) => {
	const attachPicture = () => {
		setPicture(null);
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
