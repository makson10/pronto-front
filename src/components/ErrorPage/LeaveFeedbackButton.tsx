import { Button } from '@mui/material';
import { useRouter } from 'next/navigation';

const LeaveFeedbackButton = () => {
	const router = useRouter();
	const handleGoToFeedback = () => router.push('/feedback');

	return (
		<Button
			variant="contained"
			sx={{ width: '50%', height: '100%' }}
			onClick={handleGoToFeedback}>
			Leave feedback
		</Button>
	);
};

export default LeaveFeedbackButton;
