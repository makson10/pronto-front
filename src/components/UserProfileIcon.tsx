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
	const IconWrapperStyle: React.CSSProperties = {
		position: 'relative',
		width: width + 'px',
		height: height + 'px',
	};

	const IconStyle: React.CSSProperties = {
		minWidth: width + 'px',
		minHeight: height + 'px',
	};

	return (
		<div style={IconWrapperStyle}>
			<div className={needToLiftUp ? 'absolute -top-[60%]' : ''}>
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
						style={IconStyle}
						className="grid place-items-center rounded-full bg-gray-500 border-[--first-bg-color] border-4 text-3xl">
						{altIconText}
					</div>
				)}
			</div>
		</div>
	);
}
