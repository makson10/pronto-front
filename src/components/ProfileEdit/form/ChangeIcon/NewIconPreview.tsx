import { useEffect, useState } from 'react';

interface Props {
	newIcon: File;
}

const NewIconPreview = ({ newIcon }: Props) => {
	const [newIconUrl, setNewIconUrl] = useState<string>();

	useEffect(() => {
		setNewIconUrl(URL.createObjectURL(newIcon));
	}, [newIcon]);

	return (
		<div className="h-[250px] flex justify-center items-center">
			<img className="max-h-[250px]" src={newIconUrl} alt="#" />
		</div>
	);
};

export default NewIconPreview;
