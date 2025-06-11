'use client';
import StyledButton from '@/components/StyledButton/StyledButton';
import { Box } from '@mui/material';

interface Props {
	openEditor: (event?: React.MouseEvent<HTMLButtonElement>) => void;
}

const AddNewPostButton = ({ openEditor }: Props) => {
	return (
		<Box
			sx={{
				width: '100%',
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'flex-end',
			}}>
			<StyledButton onClick={openEditor}>Add new post</StyledButton>
		</Box>
	);
};

export default AddNewPostButton;
