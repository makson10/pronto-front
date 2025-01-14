'use client';
import FirstLine from './MainInfo/FirstLine';
import Description from './MainInfo/Description';
import Address from './MainInfo/Address';
import DateOfBirth from './MainInfo/DateOfBirth';
import { useAppSelector } from '@/store/hooks';
import Image from 'next/image';

const ProfileMainInfo = () => {
	const { age, dateOfBirth, description, city } = useAppSelector(
		(state) => state.requestedProfile.data,
	)!;

	return (
		<div className="h-fit flex flex-col gap-4">
			<FirstLine />
			<div className="flex flex-col gap-2">
				{description ? (
					<Description description={description} />
				) : (
					<NoDescriptionMessage />
				)}
				<Address city={city} />
				<DateOfBirth age={age} dateOfBirth={dateOfBirth} />
			</div>
		</div>
	);
};

const NoDescriptionMessage = () => (
	<div
		className="flex flex-row gap-2 items-center"
		aria-label="pronto-description">
		<Image
			className="w-[24px] h-[24px] opacity-50"
			src={'https://img.icons8.com/ffffff/ios/100/info-squared.png'}
			alt="#"
			width={100}
			height={100}
		/>
		<p className="w-[75%] break-all text-gray-500">Not specified</p>
	</div>
);

export default ProfileMainInfo;
