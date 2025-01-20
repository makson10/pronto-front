import Logo from './Logo';
import { Box } from '@mui/material';

const SecondaryHeader = () => {
	return (
		<Box
			width={'100vw'}
			minHeight={'64px'}
			bgcolor={'var(--header-bg-color)'}
			display={'flex'}
			flexDirection={'row'}
			justifyContent={'center'}
			py={'0.75rem'}>
			<Logo />
		</Box>
	);
};

export default SecondaryHeader;
