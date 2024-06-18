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
			console.log(textFromClipboard);
			setText((text) => text + textFromClipboard);
		});
	};

	return (
		<div className="flex flex-row gap-2">
			<AttachPictureButton attachFunction={attachPicture} />
			<PasteTextButton pasteFunction={pasteText} />
		</div>
	);
};

export default SettingsButtons;
