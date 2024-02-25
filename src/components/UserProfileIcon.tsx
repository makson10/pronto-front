import Image from 'next/image';
import style from '@/styles/userProfileIcon.module.scss';

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
		<div className={style['icon-wrapper']}>
			<div className={needToLiftUp ? 'absolute -top-[60%]' : ''}>
				{iconUrl ? (
					<Image
						className={style['empty-icon']}
						src={iconUrl}
						alt="#"
						width={width}
						height={height}
					/>
				) : (
					<div className={style['user-icon']}>{altIconText}</div>
				)}
			</div>
		</div>
	);
}
