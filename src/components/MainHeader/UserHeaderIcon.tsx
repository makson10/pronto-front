interface Props {
	name: string;
}

export default function UserHeaderIcon({ name }: Props) {
	return (
		<div className="flex flex-col justify-center items-center w-[45px] h-[45px] bg-blue-700 rounded-full cursor-pointer">
			<p>{name[0].toUpperCase()}</p>
		</div>
	);
}
