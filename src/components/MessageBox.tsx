import { createPortal } from 'react-dom';
import style from '@/styles/messageBox.module.css';

interface Props {
	message: string;
	isError?: boolean;
}

export const ShowMessageBox = ({ message, isError = false }: Props) => {
	return createPortal(
		<MessageBox message={message} isError={isError} />,
		document.querySelector('#portal')!
	);
};

const MessageBox = ({ message, isError }: Props) => {
	return (
		<div className={style['message-box-wrapper']}>
			<div className={style['message-box']} data-isError={isError} />
			<p className={style['message-box-text']}>{message}</p>
		</div>
	);
};
