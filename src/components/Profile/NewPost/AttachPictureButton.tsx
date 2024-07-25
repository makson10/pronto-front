import { Button } from '@nextui-org/react';

interface Props {
	attachFunction: () => void;
}

const AttachPictureButton = ({ attachFunction }: Props) => {
	return (
		<Button
			onClick={attachFunction}
			className="button flex justify-center items-center"
			size="sm"
			isIconOnly>
			<img
				width="25"
				height="25"
				src="https://img.icons8.com/ios-glyphs/100/camera--v1.png"
				alt="#"
			/>
		</Button>
	);
};

export default AttachPictureButton;
