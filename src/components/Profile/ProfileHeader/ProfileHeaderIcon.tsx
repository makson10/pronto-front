import ProfileIcon from '@/components/ProfileIcon';
import { store } from '@/context/store';

const ProfileHeaderIcon = () => {
	const { icon, name } = store.getState().profile!;

	return (
		<div>
			<div className="relative -top-[5%]" aria-label="profile-icon">
				<ProfileIcon iconUrl={icon} altIconText={name[0]} makeBorder={true} />
			</div>
		</div>
	);
};

export default ProfileHeaderIcon;
