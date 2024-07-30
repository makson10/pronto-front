import Image from 'next/image';
import SettingsButtons from './SettingsButtons';
import { useState } from 'react';

interface OptionDataProps {
	setNewPostText: React.Dispatch<React.SetStateAction<string>>;
	setNewPostPicture: React.Dispatch<React.SetStateAction<File | null>>;
	newPostPicture: File | null;
	charactersAmount: number;
}

interface NewPostPicturePreviewProps {
	newPostPicture: File;
	setNewPostPicture: React.Dispatch<React.SetStateAction<File | null>>;
}

interface CharacterCounterProps {
	charactersAmount: number;
}

const OptionData = ({
	setNewPostText,
	setNewPostPicture,
	newPostPicture,
	charactersAmount,
}: OptionDataProps) => {
	return (
		<div className="w-full  flex flex-row justify-between">
			<div className="flex flex-row gap-6">
				<SettingsButtons
					setText={setNewPostText}
					setPicture={setNewPostPicture}
				/>
				{newPostPicture && (
					<NewPostPicturePreview
						newPostPicture={newPostPicture}
						setNewPostPicture={setNewPostPicture}
					/>
				)}
			</div>
			<CharacterCounter charactersAmount={charactersAmount} />
		</div>
	);
};

const NewPostPicturePreview = ({
	newPostPicture,
	setNewPostPicture,
}: NewPostPicturePreviewProps) => {
	const deleteNewPostPicture = () => setNewPostPicture(null);

	return (
		<div className="bg-white pl-1 rounded-small border-1 flex flex-row gap-1">
			<Image
				className="m-auto h-fit"
				src={URL.createObjectURL(newPostPicture)}
				alt="#"
				width={30}
				height={30}
			/>
			<button className="m-auto" onClick={deleteNewPostPicture}>
				<img
					width="25"
					height="25"
					src="https://img.icons8.com/ios-filled/100/multiply.png"
					alt="#"
				/>
			</button>
		</div>
	);
};

const CharacterCounter = ({ charactersAmount }: CharacterCounterProps) => {
	return (
		<div className="leading-[2] mr-1 text-gray-500">
			{charactersAmount} characters
		</div>
	);
};

export default OptionData;
