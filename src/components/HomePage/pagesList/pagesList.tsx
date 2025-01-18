'use client';
import pagesLinks from '@/assets/pagesLinks';
import PageLink from './PageField';
import { Box } from '@mui/material';

const PagesList = () => {
	return (
		<Box width="20%" pt="3rem">
			<Box
				py="1rem"
				display="flex"
				flexDirection="column"
				alignItems="center"
				gap="0.5rem">
				<Box display="flex" flexDirection="column" gap="0.75rem">
					{pagesLinks.map((pageLink, index) => (
						<PageLink
							key={index}
							title={pageLink.title}
							icon={pageLink.icon}
							goToPath={pageLink.goToPath}
						/>
					))}
				</Box>
			</Box>
		</Box>
	);
};

export default PagesList;
