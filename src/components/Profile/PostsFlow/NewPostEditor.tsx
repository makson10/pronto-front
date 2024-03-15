import { useEffect, useState } from 'react';
import { Button, Textarea } from '@nextui-org/react';
import { ShowMessageBox } from '@/components/MessageBox';
import axios from 'axios';
import SettingsButtons from './SettingsButtons';

interface Props {
	closeEditor: (event?: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function NewPostEditor({ closeEditor }: Props) {
	const [newPostText, setNewPostText] = useState<string>('');
	const [newPostPicture, setNewPostPicture] = useState<File | null>(null);
	const [errorMessage, setErrorMessage] = useState<string>('');

	const makeNewPost = async () => {
		const isDataValid = validateNewPostData();
		if (!isDataValid) return;

		const newPost = { text: newPostText, picture: newPostPicture };
		await axios.post('/api/makenewpost', { newPost });
		closeEditor();
	};

	const validateNewPostData = () => {
		if (!newPostText) {
			setErrorMessage('New post text is empty');
		} else if (newPostPicture && newPostPicture.size > 4 * 1024 * 1024) {
			setErrorMessage('Picture size is too large');
		} else return true;
	};

	useEffect(() => {
		if (!errorMessage) return;
		setTimeout(() => setErrorMessage(''), 4000);
	}, [errorMessage]);

	return (
		<>
			{errorMessage && <ShowMessageBox message={errorMessage} isError={true} />}
			<Textarea
				classNames={textareaStyle}
				placeholder="Write here your posts..."
				value={newPostText}
				onValueChange={setNewPostText}
				endContent={
					<SettingsButtons
						setText={setNewPostText}
						setPicture={setNewPostPicture}
					/>
				}
			/>
			<div className="w-full flex flex-row justify-end">
				<div className="flex flex-row items-end gap-4">
					<Button className="button" onClick={closeEditor}>
						Discard new post
					</Button>
					<Button className="button" onClick={makeNewPost}>
						Post
					</Button>
				</div>
			</div>
		</>
	);
}

const textareaStyle = {
	base: 'w-full min-h-[230px]',
	inputWrapper:
		'min-h-full bg-gray-900 border-3 border-[--border-main-color] data-[hover=true]:bg-gray-900 group-data-[focus=true]:bg-gray-900 flex justify-start',
	innerWrapper: 'flex flex-col gap-2 h-4/5',
	input: 'min-h-full group-data-[has-value=true]:text-white textarea-scrollbar',
};
