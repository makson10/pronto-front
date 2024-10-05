'use client';
import { useRouter } from 'next/navigation';

interface Props {
	id: number;
	name: string;
	lastMessage: string;
}

export default function ChatItem({ id, lastMessage, name }: Props) {
	const router = useRouter();

	return (
		<div
			className="w-full flex justify-center items-center h-[60px] bg-[#3E3232]"
			onClick={() => router.push('/chat/' + id)}>
			{name}
			{/* {lastMessage} */}
		</div>
	);
}
