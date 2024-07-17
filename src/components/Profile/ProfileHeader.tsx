import ProfileIcon from './ProfileHeader/ProfileHeaderIcon';
import ProfileMainInfo from './ProfileHeader/ProfileMainInfo';
import InterectiveButton from './ProfileHeader/InterectiveButton';

const ProfileHeader = () => {
	return (
		<div className="w-full flex min-h-[300px] h-1/2 bg-slate-700 rounded-xl border-[--border-main-color] border-[4px]">
			<div className="relative flex flex-row gap-6 w-full mt-auto bg-[--main-color] rounded-t-2xl rounded-b-lg max-h-[150px] p-4">
				<ProfileIcon />
				<ProfileMainInfo />
				<InterectiveButton />
			</div>
		</div>
	);
};

export default ProfileHeader;
