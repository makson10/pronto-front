import Image from 'next/image';

interface Props {
	age: number | null;
	dateOfBirth: string | null;
}

const DateOfBirth = ({ age, dateOfBirth }: Props) => {
	return (
		<div className="flex flex-row gap-2" aria-label="pronto-age">
			<Image
				className="w-[24px]"
				style={{ opacity: age ? 1 : 0.5 }}
				src={'https://img.icons8.com/ios/100/ffffff/calendar--v1.png'}
				alt="#"
				width={64}
				height={64}
			/>

			{age ? (
				<p>
					{new Date(dateOfBirth!).toLocaleDateString()} ({age} years)
				</p>
			) : (
				<p className="text-gray-500">Not specified</p>
			)}
		</div>
	);
};

export default DateOfBirth;
