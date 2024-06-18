import ProfileIcon from '@/components/ProfileIcon';

interface ProfileIconProps {
	iconUrl?: string | null;
	altIconText?: string | null;
}

const ProfileHeaderIcon = ({
	iconUrl = null,
	altIconText = null,
}: ProfileIconProps) => {
	return (
		<div>
			<div className="relative -top-[75%]" aria-label="profile-icon">
				<ProfileIcon
					iconUrl={iconUrl}
					altIconText={altIconText}
					makeBorder={true}
				/>
			</div>
		</div>
	);
};

export default ProfileHeaderIcon;
