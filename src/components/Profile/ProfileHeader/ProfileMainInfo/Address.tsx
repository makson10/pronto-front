import Image from 'next/image';

interface Props {
	city: string | null;
}

const Address = ({ city }: Props) => (
	<div className="flex flex-row gap-2" aria-label="pronto-address">
		<Image
			className="w-[24px]"
			style={{ opacity: city ? 1 : 0.5 }}
			src={'https://img.icons8.com/pastel-glyph/64/ffffff/place-marker--v1.png'}
			alt="#"
			width={64}
			height={64}
		/>
		{city ? city : <p className="text-gray-500">Not specified</p>}
	</div>
);

export default Address;
