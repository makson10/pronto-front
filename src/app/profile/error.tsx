'use client';
import { Box, Button, Container, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';

interface Props {
	error: Error & { digest?: string; cause?: string };
	reset: () => void;
}

const Error = ({ error, reset }: Props) => {
	const router = useRouter();
	const handleGoHome = () => router.push('/');
	const handleGoToFeedback = () => router.push('/feedback');

	return (
		<Container sx={{ height: '100vh' }}>
			<Box
				sx={{
					height: '100%',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
				}}>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						gap: 6,
					}}>
					<Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
						<Typography variant="h3" align="center" color="error">
							Error occured
						</Typography>
						<Typography variant="h6" align="center">
							{error.message}
						</Typography>
					</Box>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'row',
							alignItems: 'center',
							gap: 2,
						}}>
						<Button
							variant="contained"
							sx={{ width: '50%', height: '100%' }}
							color="success"
							onClick={handleGoHome}>
							Go home
						</Button>
						<Button
							variant="contained"
							sx={{ width: '50%', height: '100%' }}
							onClick={handleGoToFeedback}>
							Leave feedback
						</Button>
					</Box>
				</Box>
			</Box>
		</Container>
	);
};

export default Error;
