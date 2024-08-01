import { Button } from '@nextui-org/react';

interface Props {
	pasteFunction: () => void;
}

const PasteTextButton = ({ pasteFunction }: Props) => {
	return (
		<Button
			onClick={pasteFunction}
			className="button flex justify-center items-center"
			size="sm"
			isIconOnly>
			<img
				width="30"
				height="30"
				src="https://img.icons8.com/ios-glyphs/100/paste.png"
				alt="#"
			/>
		</Button>
	);
};

export default PasteTextButton;
