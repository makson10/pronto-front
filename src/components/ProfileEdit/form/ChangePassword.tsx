import ChangePasswordModal from './ChangePassword/ChangePasswordModal';
import EditField from './EditField';

const ChangePassword = () => {
	return (
		<EditField
			title="Password"
			description={
				<p>
					Here you can change ur password.{' '}
					<b>Be careful, you can change password once a week</b>
				</p>
			}>
			<ChangePasswordModal />
		</EditField>
	);
};

export default ChangePassword;
