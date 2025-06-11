'use client';
import ProfileHeaderIcon from './ProfileHeaderIcon';
import MainInfo from './MainInfo';
import InterectiveButton from './InterectiveButton';
import { Box } from '@mui/material';

const ProfileHeader = () => (
	<Box
		sx={{
			width: '100%',
			display: 'flex',
			minHeight: '350px',
			height: '60%',
			backgroundColor: '#334155',
			borderWidth: '4px',
			borderColor: 'var(--border-main-color)',
			borderRadius: '12px',
		}}>
		<Box className="relative flex flex-row gap-6 w-full mt-auto bg-[--main-color] rounded-t-2xl rounded-b-lg h-fit max-h-[200px] p-4">
			<ProfileHeaderIcon />
			<MainInfo />
			<InterectiveButton />
		</Box>
	</Box>
);

export default ProfileHeader;
