'use client';
import GoHomeButton from '@/components/ErrorPage/GoHomeButton';
import LeaveFeedbackButton from '@/components/ErrorPage/LeaveFeedbackButton';
import LogInButton from '@/components/ErrorPage/LogInButton';
import LogOutButton from '@/components/ErrorPage/LogOutButton';
import { Box, Container, Typography } from '@mui/material';

interface Props {
	error: Error & { digest?: string; cause?: string };
	reset: () => void;
}

const Error = ({ error }: Props) => {
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
							minWidth: '300px',
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'space-between',
							alignItems: 'center',
							gap: 2,
						}}>
						<GoHomeButton />
						{error.cause === 'Authorization page access denied' ? (
							<LogOutButton />
						) : error.cause === 'Unauthorized access' ? (
							<LogInButton />
						) : (
							<LeaveFeedbackButton />
						)}
					</Box>
				</Box>
			</Box>
		</Container>
	);
};

export default Error;
