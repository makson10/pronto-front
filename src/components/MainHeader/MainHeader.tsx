import { Box, Link } from '@mui/material';
import Logo from '../common/Logo';
import SearchBox from './SearchBox';
import UserIcon from './UserIcon';

const MainHeader = () => {
	return (
		<Box sx={{ bgcolor: 'var(--header-bg-color)', px: '20%' }}>
			<Box
				display="flex"
				flexDirection="row"
				justifyContent="space-between"
				p={2}>
				<Box
					display="flex"
					flexDirection="row"
					justifyContent="center"
					alignItems="center"
					gap={4}>
					<Logo />
					<SearchBox />
				</Box>
				<UserIcon />
			</Box>
		</Box>
	);
};

export default MainHeader;
