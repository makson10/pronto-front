import ProfileIcon from '@/components/common/ProfileIcon';
import { store } from '@/store/store';

const ProfileHeaderIcon = () => {
	const { icon, name } = store.getState().profile!;

	return (
		<div className="flex flex-col justify-center">
			<div aria-label="profile-icon">
				<ProfileIcon iconUrl={icon} altIconText={name[0]} makeBorder={true} />
			</div>
		</div>
	);
};

export default ProfileHeaderIcon;
