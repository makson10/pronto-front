import { Dispatch, SetStateAction } from 'react';
import style from '@/styles/changePasswordVisibilityButton.module.scss';

interface Props {
	isPasswordVisible: boolean;
	setIsPasswordVisible: Dispatch<SetStateAction<boolean>>;
	styleVariant?: 1 | 2;
}

export default function ChangePasswordVisibilityButton({
	isPasswordVisible,
	setIsPasswordVisible,
	styleVariant = 1,
}: Props) {
	const togglePasswordVisible = (event: any) => {
		event.preventDefault();
		setIsPasswordVisible((prevValue) => !prevValue);
	};

	return (
		<button
			tabIndex={-1}
			className={style['change-password-visibility-button']}
			data-variant={styleVariant === 1 ? 'first' : 'second'}
			onClick={togglePasswordVisible}>
			<img
				width="24"
				height="24"
				src={`https://img.icons8.com/material-outlined/24/${
					styleVariant === 1 ? 'ffffff' : '000000'
				}/${isPasswordVisible ? 'invisible.png' : 'visible--v1.png'}`}
				alt="#"
			/>
		</button>
	);
}
