'use client';
import { Button } from '@mui/material';
import { useRouter } from 'next/navigation';

const GoHomeButton = () => {
	const router = useRouter();
	const handleGoHome = () => router.push('/');

	return (
		<Button
			variant="contained"
			sx={{
				width: '50%',
				height: '100%',
				bgcolor: '#00AB66',
				color: 'white',
				':hover': { bgcolor: '#017043' },
			}}
			onClick={handleGoHome}>
			Go home
		</Button>
	);
};

export default GoHomeButton;
