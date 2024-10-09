import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { store } from '@/context/store';
import { getUserIconById } from '@/assets/sessionUtils';
import { Message as MessageType } from '@/types/chat';

interface MessageProps {
	message: MessageType;
}

const DEFAULT_GUEST_ICON_PHOTO_URL =
	'https://static.wikia.nocookie.net/roblox-famed-games/images/c/c8/Guest.jpg/revision/latest?cb=20130915214150';

const Message = ({
	message: { text, senderId, timestamp, wasReaded },
}: MessageProps) => {
	const user = store.getState().user;
	const isMessageFromMe = user?.id === senderId;
	const [senderIconUrl, setSenderIconUrl] = useState(
		DEFAULT_GUEST_ICON_PHOTO_URL
	);
	const router = useRouter();

	const handleIconClick = () =>
		router.push(`/profile/${isMessageFromMe ? user.id : senderId}`);

	useEffect(() => {
		getUserIconById(senderId).then((iconUrl) => {
			setSenderIconUrl(iconUrl);
		});
	}, []);

	return (
		<div className="flex flex-row gap-3">
			<div className="flex flex-col justify-end">
				<Image
					className="rounded-full cursor-pointer"
					src={senderIconUrl || DEFAULT_GUEST_ICON_PHOTO_URL}
					alt="#"
					width={30}
					height={30}
					onClick={handleIconClick}
				/>
			</div>
			<div
				className={`p-2 rounded-2xl shadow-md ${
					isMessageFromMe ? 'bg-[#405D72]' : 'bg-[#6b7280]'
				} max-w-[60%]`}>
				<div className="flex flex-row gap-2">
					<p className="break-words w-[93%]">{text}</p>
					<div className="flex flex-col justify-end">
						<Image
							className="text-xs min-w-[15px] min-h-[15px]"
							src={`https://img.icons8.com/ios-filled/100/${
								wasReaded ? '4761FF' : 'DDDDDD'
							}/double-tick.png`}
							alt="#"
							width={15}
							height={15}
						/>
					</div>
				</div>
			</div>
			<p className="flex flex-col justify-end text-xs text-[#545a65]">
				{new Date(timestamp).toLocaleTimeString([], {
					hour: '2-digit',
					minute: '2-digit',
				})}
			</p>
		</div>
	);
};

export default Message;
