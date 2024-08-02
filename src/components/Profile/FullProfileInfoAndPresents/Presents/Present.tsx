import Image from 'next/image';

interface Props {
	present: Present;
}

const Present = ({ present: { title, icon } }: Props) => {
	return (
		<div className="min-w-[130px] p-2 flex flex-col items-center gap-2 border-4 border-[--border-main-color] rounded-medium">
			<Image src={icon} alt="#" width={100} height={100} />
			<p className="text-center text-sm">{title}</p>
		</div>
	);
};

export default Present;
