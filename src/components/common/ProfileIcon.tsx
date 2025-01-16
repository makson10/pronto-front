import Image from 'next/image';
import style from '@/styles/userProfileIcon.module.css';

interface Props {
	iconUrl?: string | null;
	altIconText?: string | null;
	width?: number;
	height?: number;
	makeBorder?: boolean;
}

const ProfileIcon = ({
	iconUrl = null,
	altIconText = null,
	width = 150,
	height = 150,
	makeBorder = false,
}: Props) => {
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
					priority={true}
					src={iconUrl}
					alt="#"
					width={150}
					height={height}
				/>
			) : (
				<div className={style['user-icon']} data-makeborder={makeBorder}>
					{altIconText}
				</div>
			)}
		</div>
	);
};

export default ProfileIcon;
