import { Divider } from '@mui/material';

const Separator = () => {
	return (
		<Divider
			sx={{
				width: '100%',
				borderWidth: '2px',
				borderColor: 'rgb(156 163 175 / .2);',
				borderRadius: '1rem',
			}}
		/>
	);
};

export default Separator;
