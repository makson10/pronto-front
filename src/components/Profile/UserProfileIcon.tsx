import Image from 'next/image';

interface Props {
	iconUrl: string | null;
	userName: string;
}

export default function UserProfileIcon({ iconUrl, userName }: Props) {
	return (
		<div className="relative min-w-[150px]">
			<div className="absolute -top-[80%]">
				{iconUrl ? (
					<Image
						className="rounded-full border-[--first-bg-color] border-4"
						src={iconUrl}
						alt="#"
						width={150}
						height={150}
					/>
				) : (
					<div className="w-[150px] h-[150px] grid place-items-center rounded-full bg-gray-500 border-[--first-bg-color] border-4 text-3xl">
						{userName.slice(0, 1).toUpperCase()}
					</div>
				)}
			</div>
		</div>
	);
}
