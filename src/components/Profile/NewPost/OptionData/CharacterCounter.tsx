import { Box } from '@mui/material';

interface Props {
	charactersAmount: number;
}

const CharacterCounter = ({ charactersAmount }: Props) => (
	<Box sx={{ mr: '0.5rem', color: '#6b7280', lineHeight: '2' }}>
		{charactersAmount} characters
	</Box>
);

export default CharacterCounter;
