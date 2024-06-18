import Link from 'next/link';

interface Props {
	title: string;
	icon: string;
	goToPath: string;
}

const PageLink = ({ title, icon, goToPath }: Props) => {
	return (
		<Link className="text-xl" href={goToPath}>
			<div className="flex flex-row gap-3">
				<img width="28" height="28" src={icon} alt="#" />
				<p className="cursor-pointer transition-all hover:underline">{title}</p>
			</div>
		</Link>
	);
};

export default PageLink;
