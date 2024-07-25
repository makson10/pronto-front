import SettingsButtons from './SettingsButtons';

interface OptionDataProps {
	setNewPostText: React.Dispatch<React.SetStateAction<string>>;
	setNewPostPicture: React.Dispatch<React.SetStateAction<File | null>>;
	charactersAmount: number;
}

interface CharacterCounterProps {
	charactersAmount: number;
}

const OptionData = ({
	setNewPostText,
	setNewPostPicture,
	charactersAmount,
}: OptionDataProps) => {
	return (
		<div className="w-full  flex flex-row justify-between">
			<SettingsButtons
				setText={setNewPostText}
				setPicture={setNewPostPicture}
			/>
			<CharacterCounter charactersAmount={charactersAmount} />
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
