'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Logo = () => {
	const router = useRouter();

	return (
		<div className="flex flex-col justify-center">
			<Image
				priority={true}
				onClick={() => router.push('/')}
				className="cursor-pointer w-[120px] h-[36px]"
				src="/long_logo.png"
				alt="#"
				width={120}
				height={36}
				draggable={false}
			/>
		</div>
	);
};

export default Logo;
