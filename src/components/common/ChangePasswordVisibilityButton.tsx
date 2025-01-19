import { Dispatch, SetStateAction } from 'react';
import { Button } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

interface Props {
	isPasswordVisible: boolean;
	setIsPasswordVisible: Dispatch<SetStateAction<boolean>>;
	styleVariant?: 1 | 2;
}

const ChangePasswordVisibilityButton = ({
	isPasswordVisible,
	setIsPasswordVisible,
	styleVariant = 1,
}: Props) => {
	const togglePasswordVisible = (event: any) => {
		event.preventDefault();
		setIsPasswordVisible((prevValue) => !prevValue);
	};

	return (
		<Button
			tabIndex={-1}
			sx={{
				borderRadius: '6px',
				bgcolor: '#737373',
				p: '0.3rem',
				minWidth: styleVariant === 1 ? 'auto' : 'fit-content',
				':hover': {
					bgcolor: '#737373',
				},
			}}
			onClick={togglePasswordVisible}>
			{isPasswordVisible ? <VisibilityOffIcon /> : <VisibilityIcon />}
		</Button>
	);
};

export default ChangePasswordVisibilityButton;
