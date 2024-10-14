'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const HelpnessButton = () => {
	const router = useRouter();

	const handleHomeButtonClick = () => router.push('/');
	const handleNewChatClick = () => {};
	const handleDeleteButtonClick = () => {};

	return (
		<div className="h-[8%] bg-[#342a2a] px-4">
			<div className="h-full flex justify-around items-center gap-2">
				<Image
					className="w-[30px] h-[30px] cursor-pointer"
					src="https://img.icons8.com/ios-filled/ffffff/100/home.png"
					alt="#"
					width={100}
					height={100}
					onClick={handleHomeButtonClick}
				/>
				<Image
					className="w-[30px] h-[30px] cursor-pointer"
					src="https://img.icons8.com/material-outlined/ffffff/100/create-new.png"
					alt="#"
					width={100}
					height={100}
					onClick={handleNewChatClick}
				/>
				<Image
					className="w-[30px] h-[30px] cursor-pointer"
					src="https://img.icons8.com/material-sharp/ffffff/100/trash.png"
					alt="#"
					width={100}
					height={100}
					onClick={handleDeleteButtonClick}
				/>
			</div>
		</div>
	);
};

export default HelpnessButton;
