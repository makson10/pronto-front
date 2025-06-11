import { PropsWithChildren } from 'react';
import { Box } from '@mui/material';

const ProfileContentWrapper = ({ children }: PropsWithChildren) => (
	<Box sx={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
		{children}
	</Box>
);

export default ProfileContentWrapper;
