import SettingsButtons from './OptionData/SettingsButtons';
import CharacterCounter from './OptionData/CharacterCounter';
import NewPostPicturePreview from './PicturePreview/PicturePreview';

interface OptionDataProps {
	setNewPostText: React.Dispatch<React.SetStateAction<string>>;
	setNewPostPicture: React.Dispatch<React.SetStateAction<File | null>>;
	newPostPicture: File | null;
	charactersAmount: number;
}

const OptionData = ({
	setNewPostText,
	setNewPostPicture,
	newPostPicture,
	charactersAmount,
}: OptionDataProps) => {
	return (
		<div className="w-full flex flex-row justify-between">
			<div className="flex flex-row gap-6">
				<SettingsButtons
					setText={setNewPostText}
					setPicture={setNewPostPicture}
				/>
				{newPostPicture && (
					<NewPostPicturePreview
						pictureUrl={URL.createObjectURL(newPostPicture)}
						setNewPostPicture={setNewPostPicture}
					/>
				)}
			</div>
			<CharacterCounter charactersAmount={charactersAmount} />
		</div>
	);
};

export default OptionData;
