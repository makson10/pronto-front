import Image from 'next/image';
import style from '@/styles/userProfileIcon.module.scss';

interface Props {
	iconUrl?: string | null;
	altIconText?: string | null;
}

const PostProfileIcon = ({ iconUrl = null, altIconText = null }: Props) => {
	return iconUrl ? (
		<Image
			className={style['post-profile-empty-icon']}
			src={iconUrl}
			alt="#"
			width={50}
			height={50}
		/>
	) : (
		<div className={style['post-profile-user-icon']} data-makeborder={true}>
			{altIconText}
		</div>
	);
};

export default PostProfileIcon;
