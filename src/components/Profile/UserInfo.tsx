'use client';
import { Fragment, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import {
	AddressProps,
	DescriptionProps,
	MainProps,
	NameProps,
} from '@/types/profilePagePropsTypes';

export default function UserInfo({ profile }: MainProps) {
	return (
		<div className="flex flex-col gap-1">
			<NameInfo data={profile} />
			{profile.description && <Description description={profile.description} />}
			{profile.city && <AddressInfo city={profile.city} />}
		</div>
	);
}

const NameInfo = ({ data: { name, verifedUser, createdAt } }: NameProps) => {
	const userRegistrationDate = new Date(createdAt).toLocaleDateString();

	return (
		<div className="flex flex-row gap-2 items-center">
			<p className="text-2xl">{name}</p>
			{verifedUser && <VerifedUserIcon />}
			<p className="text-gray-500 text-sm">
				in pronto from {userRegistrationDate}
			</p>
		</div>
	);
};

const VerifedUserIcon = () => <div className="w-[20px]">✔</div>;

const Description = ({ description }: DescriptionProps) => {
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

const AddressInfo = ({ city }: AddressProps) => (
	<div className="flex flex-row gap-2">
		<Image
			className="w-[24px]"
			src={'https://img.icons8.com/pastel-glyph/64/ffffff/place-marker--v1.png'}
			alt="#"
			width={32}
			height={32}
		/>
		<p>{city}</p>
	</div>
);
