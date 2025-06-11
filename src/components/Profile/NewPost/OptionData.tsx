import SettingsButtons from './OptionData/SettingsButtons';
import CharacterCounter from './OptionData/CharacterCounter';
import NewPostPicturePreview from './PicturePreview/PicturePreview';
import { Box } from '@mui/material';

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
		<Box
			sx={{
				width: '100%',
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'space-between',
			}}>
			<Box sx={{ display: 'flex', flexDirection: 'row', gap: '1.5rem' }}>
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
			</Box>
			<CharacterCounter charactersAmount={charactersAmount} />
		</Box>
	);
};

export default OptionData;
