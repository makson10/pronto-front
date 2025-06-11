import Image from 'next/image';
import { useEffect, useState } from 'react';

interface Props {
	newIcon: File;
}

const NewIconPreview = ({ newIcon }: Props) => {
	const [newIconUrl, setNewIconUrl] = useState<string>();

	useEffect(() => {
		setNewIconUrl(URL.createObjectURL(newIcon));
	}, [newIcon]);

	if (!newIconUrl) return null;

	return (
		<div className="h-[250px] flex justify-center items-center">
			<Image
				className="w-full max-h-[250px] object-contain"
				src={newIconUrl}
				alt="#"
				width={250}
				height={250}
			/>
		</div>
	);
};

export default NewIconPreview;
