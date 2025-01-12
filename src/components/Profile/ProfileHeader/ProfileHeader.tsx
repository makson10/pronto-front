'use client';
import ProfileHeaderIcon from './ProfileHeaderIcon';
import MainInfo from './MainInfo';
import InterectiveButton from './InterectiveButton';

const ProfileHeader = () => {
	return (
		<div className="w-full flex min-h-[350px] h-[60%] bg-slate-700 rounded-xl border-[--border-main-color] border-[4px]">
			<div className="relative flex flex-row gap-6 w-full mt-auto bg-[--main-color] rounded-t-2xl rounded-b-lg h-fit max-h-[200px] p-4">
				<ProfileHeaderIcon />
				<MainInfo />
				<InterectiveButton />
			</div>
		</div>
	);
};

export default ProfileHeader;
