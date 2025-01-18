import Image from 'next/image';
import { Box } from '@mui/material';

interface Props {
	iconUrl?: string | null;
	altIconText?: string | null;
	width?: number;
	height?: number;
	makeBorder?: boolean;
}

const ProfileIcon = ({
	iconUrl = null,
	altIconText = null,
	width = 150,
	height = 150,
}: Props) => {
	return (
		<Box
			position="relative"
			width="150px"
			height="150px"
			sx={{
				scale: (width / 150) * 100 + '%',
				left: (width - 150) / 2,
				top: (height - 150) / 2,
			}}>
			{iconUrl ? (
				<Image
					className="min-h-full min-w-full rounded-full"
					priority={true}
					src={iconUrl}
					alt="#"
					width={width}
					height={height}
				/>
			) : (
				<Box
					minHeight={height}
					minWidth={width}
					width="100%"
					height="100%"
					display="grid"
					sx={{ placeItems: 'center' }}
					borderRadius="100%"
					bgcolor="#4e4e4e"
					fontSize="3.5rem">
					{altIconText}
				</Box>
			)}
		</Box>
	);
};

export default ProfileIcon;
