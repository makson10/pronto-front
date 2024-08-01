import { Button } from '@nextui-org/react';
import { ChangeEvent } from 'react';

interface Props {
	attachFunction: (e: ChangeEvent<HTMLInputElement>) => void;
}

const AttachPictureButton = ({ attachFunction }: Props) => {
	return (
		<Button
			className="button flex justify-center items-center"
			size="sm"
			isIconOnly>
			<label htmlFor="post-image-input">
				<input
					id="post-image-input"
					type="file"
					accept="image/*"
					onChange={attachFunction}
					className="hidden"
				/>
				<img
					width="30"
					height="30"
					src="https://img.icons8.com/ios-glyphs/100/camera--v1.png"
					alt="#"
				/>
			</label>
		</Button>
	);
};

export default AttachPictureButton;
