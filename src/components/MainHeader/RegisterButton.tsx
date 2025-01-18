import { Box, Button, Divider, Link, Stack, Typography } from '@mui/material';

const RegisterButton = () => {
	return (
		<Stack direction="row" spacing={1}>
			<Link
				color="white"
				display="flex"
				flexDirection="column"
				justifyContent="center"
				height="100%"
				sx={{
					borderWidth: '2px',
					borderColor: 'transparent',
					px: '0.2rem',
					'&:hover': { borderColor: 'white' },
				}}
				href="/signup">
				<Typography fontWeight="bold">Sign Up</Typography>
			</Link>
			<Divider
				orientation="vertical"
				variant="middle"
				sx={{ bgcolor: 'white', width: '2px' }}
			/>
			<Link
				color="white"
				display="flex"
				flexDirection="column"
				justifyContent="center"
				height="100%"
				sx={{
					borderWidth: '2px',
					borderColor: 'transparent',
					px: '0.2rem',
					'&:hover': { borderColor: 'white' },
				}}
				href="/login">
				<Typography fontWeight="bold">Log In</Typography>
			</Link>
		</Stack>
	);
};

export default RegisterButton;
