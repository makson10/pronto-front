import ChangePasswordVisibilityButton from '@/components/ChangePasswordVisibilityButton';

interface Props {
	isPasswordVisible: boolean;
	setIsPasswordVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const ChangePasswordVisibility = ({
	isPasswordVisible,
	setIsPasswordVisible,
}: Props) => {
	return (
		<ChangePasswordVisibilityButton
			isPasswordVisible={isPasswordVisible}
			setIsPasswordVisible={setIsPasswordVisible}
			styleVariant={2}
		/>
	);
};

export default ChangePasswordVisibility;
