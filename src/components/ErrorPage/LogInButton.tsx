import { Button } from '@mui/material';
import { useRouter } from 'next/navigation';

const LogInButton = () => {
	const router = useRouter();
	const handleGoLogIn = () => router.push('/login');

	return (
		<Button
			variant="contained"
			sx={{
				width: '50%',
				height: '100%',
			}}
			onClick={handleGoLogIn}>
			Log In
		</Button>
	);
};

export default LogInButton;
