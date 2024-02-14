'use client';
import { LegacyRef, useRef, useState } from 'react';
import EditField from './EditField';
import axios from 'axios';

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
	const buttonRef = useRef<HTMLButtonElement>();

	const handleClick = async () => {
		if (buttonRef.current) buttonRef.current.disabled = true;
		await axios.post('/api/sendverificationrequest');
		setShouldShowSendButton(false);
	};

	return (
		<button
			ref={buttonRef as LegacyRef<HTMLButtonElement>}
			className="mx-auto w-fit bg-white text-black font-bold py-2 px-4 rounded transition duration-200 ease-in-out hover:bg-gray-300 disabled:bg-gray-500"
			onClick={handleClick}>
			Send verification request
		</button>
	);
};
