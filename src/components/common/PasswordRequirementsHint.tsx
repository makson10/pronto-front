import { Tooltip } from '@nextui-org/react';
import { IconButton } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const RequirementsText = () => {
	return (
		<p className="text-black">
			Password must contain at least 8 characters and at least 1 special symbol
		</p>
	);
};

const PasswordRequirementsHint = () => {
	const handleClick = (
		event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
	) => event.preventDefault();

	return (
		<Tooltip content={<RequirementsText />} closeDelay={0}>
			<IconButton sx={{ p: 0 }} onClick={handleClick}>
				<InfoOutlinedIcon color="primary" sx={{ width: '20px' }} />
			</IconButton>
		</Tooltip>
	);
};

export default PasswordRequirementsHint;
