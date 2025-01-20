import { Box, Container, Typography } from '@mui/material';
import GoHomeButton from '@/components/ErrorPage/GoHomeButton';

const NotFound = () => {
	return (
		<Container sx={{ height: '100vh' }}>
			<Box
				height={'100%'}
				display={'flex'}
				flexDirection={'column'}
				justifyContent={'center'}
				alignItems={'center'}>
				<Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
					<Box display={'flex'} flexDirection={'column'} gap={4}>
						<Box display={'flex'} flexDirection={'column'} gap={2}>
							<Typography variant="h3" align="center" color="error">
								Not found
							</Typography>
							<Typography variant="h6" align="center">
								{/* eslint-disable-next-line react/no-unescaped-entities */}
								It seems you're trying to access a page that doesn't exist.
							</Typography>
						</Box>
						<Box
							display={'flex'}
							flexDirection={'row'}
							justifyContent={'center'}>
							<GoHomeButton />
						</Box>
					</Box>
				</Box>
			</Box>
		</Container>
	);
};

export default NotFound;
