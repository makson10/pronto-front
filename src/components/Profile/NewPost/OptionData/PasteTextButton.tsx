import { Button } from '@nextui-org/react';
import Image from 'next/image';

interface Props {
	pasteFunction: () => void;
}

const PasteTextButton = ({ pasteFunction }: Props) => {
	return (
		<Button
			onClick={pasteFunction}
			className="flex justify-center items-center bg-white"
			size="sm"
			isIconOnly>
			<Image
				width="30"
				height="30"
				src="https://img.icons8.com/ios-glyphs/100/paste.png"
				alt="#"
			/>
		</Button>
	);
};

export default PasteTextButton;
