import Image from 'next/image';
import style from '@/styles/userProfileIcon.module.scss';

interface Props {
	iconUrl?: string | null;
	altIconText?: string | null;
	width?: number;
	height?: number;
}

export default function UserProfileIcon({
	iconUrl = null,
	altIconText = null,
	width = 150,
	height = 150,
}: Props) {
	return (
		<div
			className={style['icon-wrapper']}
			style={{
				scale: (width / 150) * 100 + '%',
				left: (width - 150) / 2,
				top: (height - 150) / 2,
			}}>
			{iconUrl ? (
				<Image
					className={style['empty-icon']}
					src={iconUrl}
					alt="#"
					width={150}
					height={height}
				/>
			) : (
				<div className={style['user-icon']}>{altIconText}</div>
			)}
		</div>
	);
}
