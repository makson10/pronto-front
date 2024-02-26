import { Fragment, useEffect, useRef, useState } from 'react';
import Image from 'next/image';

interface Props {
	description: string | null;
}

const Description = ({ description }: Props) => {
	if (!description) {
		return (
			<div className="flex flex-row gap-2 items-center">
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
	}

	const mounted = useRef<boolean>(false);
	const [userDescription, setUserDescription] = useState<string>(
		description.slice(0, 80)
	);
	const [descriptionFadeOutLetter, setDescriptionFadeOutLetter] = useState<
		JSX.Element[]
	>([]);

	useEffect(() => {
		if (!mounted.current) {
			mounted.current = true;
			return;
		}

		if (userDescription.length === 80) {
			setUserDescription(userDescription.slice(0, 72));

			const otherLetters = userDescription.slice(72).split('');
			otherLetters.map((letter, index) => {
				const letterOpacity = (9 - index) * 10;
				const letterOpacityStyle = {
					color: 'rgba(255, 255, 255, 0.' + letterOpacity + ')',
				};

				const letterElement = (
					<span style={letterOpacityStyle} key={index}>
						{letter}
					</span>
				);

				setDescriptionFadeOutLetter((state) => [...state, letterElement]);
			});

			setDescriptionFadeOutLetter((state) => [
				...state,
				SeeFullDescriptionButton(),
			]);
		}
	}, [userDescription]);

	return (
		<div className="flex flex-row gap-2 items-center">
			<Image
				className="w-[24px] h-[24px]"
				src={'https://img.icons8.com/ios/100/ffffff/info-squared.png'}
				alt="#"
				width={100}
				height={100}
			/>
			<p className="w-[75%] break-all">
				{userDescription}
				{descriptionFadeOutLetter.map((elem, index) => (
					<Fragment key={index}>{elem}</Fragment>
				))}
			</p>
		</div>
	);
};

const SeeFullDescriptionButton = () => {
	const handleClick = () => {
		console.log('clicked see full description');
	};

	return (
		<button
			className="ml-1 text-white/20 text-base line-[1px]"
			onClick={handleClick}>
			{'>>'}
		</button>
	);
};

export default Description;
