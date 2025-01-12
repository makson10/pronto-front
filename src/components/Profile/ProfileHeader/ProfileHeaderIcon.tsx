'use client';
import ProfileIcon from '@/components/common/ProfileIcon';
import { useAppSelector } from '@/store/hooks';

const ProfileHeaderIcon = () => {
	const profile = useAppSelector((state) => state.requestedProfile?.data)!;

	return (
		<div className="flex flex-col justify-center">
			<div aria-label="profile-icon">
				<ProfileIcon
					iconUrl={profile.icon}
					altIconText={profile.name[0]}
					makeBorder={true}
				/>
			</div>
		</div>
	);
};

export default ProfileHeaderIcon;
