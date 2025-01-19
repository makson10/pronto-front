'use client';
import { Box } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Logo = () => {
	const router = useRouter();

	return (
		<Box display={'flex'} flexDirection={'column'} justifyContent={'center'}>
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
		</Box>
	);
};

export default Logo;
