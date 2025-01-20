import { useState } from 'react';
import FullscreenPreview from '@/components/Picture/FullscreenPreview';
import DisplayedPicture from '@/components/Picture/DisplayedPicture';
import Image from 'next/image';

interface PicturePreviewProps {
	pictureUrl: string;
	setNewPostPicture: React.Dispatch<React.SetStateAction<File | null>>;
}

const PicturePreview = ({
	pictureUrl,
	setNewPostPicture,
}: PicturePreviewProps) => {
	const [needOpenFullscreenPreview, setNeedOpenFullscreenPreview] =
		useState<boolean>(false);

	const deleteNewPostPicture = () => setNewPostPicture(null);
	const openFullscreenPreview = () => setNeedOpenFullscreenPreview(true);
	const closeFullscreenPreview = () => setNeedOpenFullscreenPreview(false);

	return (
		<>
			{needOpenFullscreenPreview && (
				<FullscreenPreview
					picture={
						<DisplayedPicture
							pictureUrl={pictureUrl}
							width={400}
							height={400}
						/>
					}
					closeFullscreenPreview={closeFullscreenPreview}
				/>
			)}
			<div className="bg-white pl-1 rounded-small border-1 flex flex-row gap-1">
				<div className="m-auto" onClick={openFullscreenPreview}>
					<DisplayedPicture pictureUrl={pictureUrl} />
				</div>
				<button className="m-auto" onClick={deleteNewPostPicture}>
					<Image
						width="25"
						height="25"
						src="https://img.icons8.com/ios-filled/100/multiply.png"
						alt="#"
					/>
				</button>
			</div>
		</>
	);
};

export default PicturePreview;
