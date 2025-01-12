'use client';
import pagesLinks from '@/assets/pagesLinks';
import PageLink from './pageField';

const PagesList = () => {
	return (
		<div className="pt-12 w-1/5">
			<div className="py-4 flex flex-col items-center gap-2">
				<div className="flex flex-col gap-3">
					{pagesLinks.map((pageLink, index) => (
						<PageLink
							key={index}
							title={pageLink.title}
							icon={pageLink.icon}
							goToPath={pageLink.goToPath}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default PagesList;
