'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface Props {
	fullName: string;
	senderId: number;
	iconUrl: string | null;
}

const ChatHeader = ({ fullName, senderId, iconUrl }: Props) => {
	const router = useRouter();
	const handleHeaderClick = () => router.push(`/profile/${senderId}`);

	return (
		<div className="h-[60px] flex flex-row items-center gap-2 p-4 bg-[#2e2525] text-white">
			<button onClick={() => router.push('/chat')}>
				<Image
					src="https://img.icons8.com/ios/ffffff/100/left--v1.png"
					alt="#"
					width={40}
					height={40}
				/>
			</button>
			<div
				className="flex flex-row items-center gap-2 cursor-pointer"
				onClick={handleHeaderClick}>
				{iconUrl && (
					<Image
						className="rounded-full"
						src={iconUrl!}
						alt="#"
						width={40}
						height={40}
					/>
				)}
				<span className="font-semibold">{fullName}</span>
			</div>
		</div>
	);
};

export default ChatHeader;
