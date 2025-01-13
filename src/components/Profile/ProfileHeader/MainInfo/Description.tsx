'use client';
import { Fragment, useEffect, useRef, useState } from 'react';
import Image from 'next/image';

interface Props {
	description: string | null;
	showEntireDescription?: boolean;
}

const MAX_TEXT_LENGTH = 80;

const Description = ({ description, showEntireDescription = false }: Props) => {
	if (!description) {
		return (
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
	}

	const mounted = useRef<boolean>(false);
	const [userDescription, setUserDescription] = useState<string>(
		showEntireDescription ? description : description.slice(0, MAX_TEXT_LENGTH),
	);
	const [descriptionFadeOutLetter, setDescriptionFadeOutLetter] = useState<
		JSX.Element[]
	>([]);

	useEffect(() => {
		if (showEntireDescription) return;

		if (!mounted.current) {
			mounted.current = true;
			return;
		}

		if (userDescription.length === MAX_TEXT_LENGTH) {
			setUserDescription(userDescription.slice(0, MAX_TEXT_LENGTH - 8));

			const otherLetters = userDescription.slice(MAX_TEXT_LENGTH - 8).split('');
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
		}
	}, [userDescription]);

	return (
		<div
			className="flex flex-row gap-2 items-center"
			aria-label="pronto-description">
			<Image
				className="w-[24px] h-[24px]"
				src={'https://img.icons8.com/ios/100/ffffff/info-squared.png'}
				alt="#"
				width={100}
				height={100}
			/>
			<p className="w-[75%] break-words">
				{userDescription}
				{descriptionFadeOutLetter.map((elem, index) => {
					return (
						<>
							<Fragment key={index}>{elem}</Fragment>
							{descriptionFadeOutLetter.length - 1 === index && (
								<SeeFullDescriptionButton />
							)}
						</>
					);
				})}
			</p>
		</div>
	);
};

const SeeFullDescriptionButton = () => {
	const handleClick = () => {
		const elem = document.getElementById('fullProfileInfo');
		elem?.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<button
			className="ml-1 text-white/20 text-base line-[1px]"
			tabIndex={-1}
			onClick={handleClick}>
			{'>>'}
		</button>
	);
};

export default Description;
