import Link from 'next/link';
import Image from 'next/image';
import { Box, Typography } from '@mui/material';

interface Props {
	title: string;
	icon: string;
	goToPath: string;
}

const PageLink = ({ title, icon, goToPath }: Props) => {
	return (
		<Link className="text-xl" href={goToPath}>
			<Box display="flex" flexDirection="row" gap="0.75rem">
				<Image width="28" height="28" src={icon} alt="#" />
				<Typography
					sx={{
						fontSize: '1.25rem',
						cursor: 'pointer',
						transition: 'all',
						':hover': {
							textDecoration: 'underline',
							textUnderlineOffset: '0.1rem',
						},
					}}>
					{title}
				</Typography>
			</Box>
		</Link>
	);
};

export default PageLink;
