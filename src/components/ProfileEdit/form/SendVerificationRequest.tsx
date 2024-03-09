'use client';
import { useRef, useState } from 'react';
import EditField from './EditField';
import axios from 'axios';
import { Button } from '@nextui-org/react';

interface MainProps {
	isVerifed: boolean;
	sentVerificationRequest: boolean;
}

interface ButtonProps {
	setShouldShowSendButton: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SendVerificationRequest({
	isVerifed,
	sentVerificationRequest,
}: MainProps) {
	const [shouldShowSendButton, setShouldShowSendButton] = useState(
		!sentVerificationRequest
	);

	return (
		<EditField
			title="Verification"
			description="Here you can send request to make your account verifed">
			{isVerifed ? (
				<p>..., but you already verifed ✅</p>
			) : shouldShowSendButton ? (
				<SendRequestButton setShouldShowSendButton={setShouldShowSendButton} />
			) : (
				<p>..., but you already sent verification request 👍</p>
			)}
		</EditField>
	);
}

const SendRequestButton = ({ setShouldShowSendButton }: ButtonProps) => {
	const isButtonDisabled = useRef<boolean>(false);

	const handleClick = async () => {
		if (isButtonDisabled.current) isButtonDisabled.current = true;
		await axios.post('/api/sendverificationrequest');
		setShouldShowSendButton(false);
	};

	return (
		<Button
			isDisabled={isButtonDisabled.current}
			className="button"
			onClick={handleClick}>
			Send verification request
		</Button>
	);
};
