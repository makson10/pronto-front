import { useState } from 'react';
import Image from 'next/image';
import FullscreenPreview from '@/components/Picture/FullscreenPreview';
import DisplayedPicture from '@/components/Picture/DisplayedPicture';
import { Box } from '@mui/material';

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
			<Box
				sx={{
					bgcolor: 'white',
					pl: '0.25rem',
					borderRadius: '0.25rem',
					border: '1px solid',
					display: 'flex',
					flexDirection: 'row',
					gap: '0.25rem',
				}}>
				<Box sx={{ m: 'auto' }} onClick={openFullscreenPreview}>
					<DisplayedPicture pictureUrl={pictureUrl} />
				</Box>
				<Box sx={{ m: 'auto' }} onClick={deleteNewPostPicture}>
					<Image
						width={25}
						height={25}
						src="https://img.icons8.com/ios-filled/100/multiply.png"
						alt="#"
					/>
				</Box>
			</Box>
		</>
	);
};

export default PicturePreview;
