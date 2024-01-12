import { Dispatch, SetStateAction } from 'react';

interface Props {
	isPasswordVisible: boolean;
	setIsPasswordVisible: Dispatch<SetStateAction<boolean>>;
}

export default function ChangePasswordVisibilityButton({
	isPasswordVisible,
	setIsPasswordVisible,
}: Props) {
	const togglePasswordVisible = (event: any) => {
		event.preventDefault();
		setIsPasswordVisible((prevValue) => !prevValue);
	};

	return (
		<button
			tabIndex={-1}
			style={ChangePasswordVisibilityButtonStyle}
			onClick={togglePasswordVisible}>
			<img
				width="24"
				height="24"
				src={
					'https://img.icons8.com/material-outlined/24/ffffff/' +
					(isPasswordVisible ? 'invisible.png' : 'visible--v1.png')
				}
				alt="#"
			/>
		</button>
	);
}

const ChangePasswordVisibilityButtonStyle: React.CSSProperties = {
	borderRadius: '6px',
	backgroundColor: '#737373',
	padding: '0.3rem',
};
