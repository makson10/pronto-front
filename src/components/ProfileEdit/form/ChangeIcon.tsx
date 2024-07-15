import EditField from './EditField';
import DropdownInput from './ChangeIcon/DropdownInput';
import { getProfile, getUserIdBySession } from '@/assets/sessionUtils';

const ChangeIcon = async () => {
	const userId = await getUserIdBySession();
	const profile = await getProfile(userId);

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
