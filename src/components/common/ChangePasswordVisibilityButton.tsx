import { Dispatch, SetStateAction } from 'react';

interface Props {
	isPasswordVisible: boolean;
	setIsPasswordVisible: Dispatch<SetStateAction<boolean>>;
	styleVariant?: 1 | 2;
}

const ChangePasswordVisibilityButton = ({
	isPasswordVisible,
	setIsPasswordVisible,
	styleVariant = 1,
}: Props) => {
	const togglePasswordVisible = (event: any) => {
		event.preventDefault();
		setIsPasswordVisible((prevValue) => !prevValue);
	};

	return (
		<button
			tabIndex={-1}
			className="rounded-md bg-[#737373] p-[0.3rem] data-[variant=second]:w-fit"
			data-variant={styleVariant === 1 ? 'first' : 'second'}
			onClick={togglePasswordVisible}>
			<img
				width="24"
				height="24"
				src={`https://img.icons8.com/material-outlined/100/ffffff/${
					isPasswordVisible ? 'invisible.png' : 'visible--v1.png'
				}`}
				alt="#"
			/>
		</button>
	);
};

export default ChangePasswordVisibilityButton;
