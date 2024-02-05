'use client';
import { getPagesLinks } from '@/assets/pagesLinkList';
import PageLink from './pageField';

export default function PagesList() {
	const pagesLinks = getPagesLinks();

	return (
		<div className="pt-12 w-1/5">
			<div className="py-4 flex flex-col items-center gap-2">
				<div className="flex flex-col gap-2">
					{pagesLinks.map((pageLink, index) => {
						return (
							<PageLink
								key={index}
								title={pageLink.title}
								icon={pageLink.icon}
								goToPath={pageLink.goToPath}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
}
