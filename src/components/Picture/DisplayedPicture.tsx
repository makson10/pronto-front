import Image from 'next/image';

interface Props {
	pictureUrl: string;
	width?: number;
	height?: number;
}

const DisplayedPicture = ({ pictureUrl, width = 30, height = 30 }: Props) => {
	return (
		<Image
			className="m-auto h-fit"
			src={pictureUrl}
			alt="#"
			width={width}
			height={height}
		/>
	);
};

export default DisplayedPicture;
