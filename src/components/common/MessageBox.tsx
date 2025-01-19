import { createPortal } from 'react-dom';
import { Box } from '@mui/material';
import style from '@/styles/messageBox.module.css';

interface Props {
	message: string;
	isError?: boolean;
}

export const ShowMessageBox = ({ message, isError = false }: Props) => {
	return createPortal(
		<MessageBox message={message} isError={isError} />,
		document.querySelector('#portal')!,
	);
};

const MessageBox = ({ message, isError }: Props) => {
	return (
		<Box display={'flex'} justifyContent={'center'}>
			<div className={style['message-box']} data-iserror={isError} />
			<p className={style['message-box-text']}>{message}</p>
		</Box>
	);
};
