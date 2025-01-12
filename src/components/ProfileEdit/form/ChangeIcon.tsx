import EditField from './EditField';
import DropdownInput from './ChangeIcon/DropdownInput';
import { getUserIdBySession } from '@/store/user/userUtils';
import { getProfile } from '@/store/profile/profileUtils';
import { Profile } from '@/types/profile';

const ChangeIcon = async () => {
	const userId = await getUserIdBySession();
	const profile = (await getProfile(userId)) as Profile;

	return (
		<EditField
			title="Icon"
			description={
				<p>
					Here you can set ur cuty face that other users can see you and{' '}
					<u>jerk off</u>
				</p>
			}>
			<DropdownInput iconExist={!!profile.icon} />
		</EditField>
	);
};

export default ChangeIcon;
