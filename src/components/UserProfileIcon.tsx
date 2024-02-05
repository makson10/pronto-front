import Image from 'next/image';

interface Props {
	iconUrl: string | null;
	altIconText: string;
	width?: number;
	height?: number;
	needToLiftUp?: boolean;
}

export default function UserProfileIcon({
	iconUrl,
	altIconText,
	width = 150,
	height = 150,
	needToLiftUp = false,
}: Props) {
	return (
		<div className={`relative min-w-[${width}px]`}>
			<div className={needToLiftUp ? 'absolute -top-[80%]' : ''}>
				{iconUrl ? (
					<Image
						className="rounded-full border-[--first-bg-color] border-4"
						src={iconUrl}
						alt="#"
						width={width}
						height={height}
					/>
				) : (
					<div
						className={`w-[${width}px] h-[${height}px] grid place-items-center rounded-full bg-gray-500 border-[--first-bg-color] border-4 text-3xl`}>
						{altIconText}
					</div>
				)}
			</div>
		</div>
	);
}
