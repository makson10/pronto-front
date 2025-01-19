import { Box, Divider, Link, Typography } from '@mui/material';

const Footer = () => {
	return (
		<Box
			display={'flex'}
			flexDirection={'column'}
			justifyContent={'end'}
			gap={'1.5rem'}
			mb={'1rem'}
			px={'20%'}>
			<Divider sx={{ borderWidth: '1px', borderColor: 'white' }} />
			<Box
				display={'flex'}
				flexDirection={'row'}
				justifyContent={'space-between'}>
				<Typography>pronto © 2023-2025</Typography>
				<Box display={'flex'} flexDirection={'row'} gap={'0.5rem'}>
					<Link href="/rules">Правила</Link>
					<Link href="/for-developers">Разработчикам</Link>
					<Link href="/about-us">О pronto</Link>
				</Box>
				<Typography>Русский | English</Typography>
			</Box>
		</Box>
	);
};

export default Footer;
