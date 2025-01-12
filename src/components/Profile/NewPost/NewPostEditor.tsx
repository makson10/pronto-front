import { useEffect, useRef, useState } from 'react';
import { Button, Textarea } from '@nextui-org/react';
import { ShowMessageBox } from '@/components/common/MessageBox';
import OptionData from './OptionData';
import { useRouter } from 'next/navigation';
import axios from 'axios';

interface Props {
	closeEditor: (event?: React.MouseEvent<HTMLButtonElement>) => void;
}

const textareaStyle = {
	base: 'w-full min-h-[270px]',
	inputWrapper:
		'min-h-full pb-0 bg-gray-900 border-3 border-[--border-main-color] data-[hover=true]:bg-gray-900 group-data-[focus=true]:bg-gray-900 flex justify-start',
	innerWrapper: 'flex flex-col gap-2 h-4/5',
	input: 'min-h-full group-data-[has-value=true]:text-white textarea-scrollbar',
};

const NewPostEditor = ({ closeEditor }: Props) => {
	const [newPostText, setNewPostText] = useState<string>('');
	const [newPostPicture, setNewPostPicture] = useState<File | null>(null);
	const [errorMessage, setErrorMessage] = useState<string>('');
	const postButtonRef = useRef<HTMLButtonElement>(null);
	const router = useRouter();

	const eventListenerHandler = (event: KeyboardEvent) => {
		if (!event.ctrlKey || event.key !== 'Enter') return;
		postButtonRef.current?.click();
	};

	const addPost = async () => {
		if (!isNewPostDataValid()) return;

		await storeNewPost();
		closeEditor();
		router.refresh();
	};

	const storeNewPost = async () => {
		const pictureUrl = await storePostImage();
		const newPost = { text: newPostText, picture: pictureUrl };
		await axios.post('/api/addpost', newPost);
	};

	const storePostImage = async () => {
		return await axios
			.post('/api/storepostimage', newPostPicture)
			.then((res) => res.data);
	};

	const isNewPostDataValid = () => {
		if (!newPostText) {
			return setErrorMessage('New post text is empty');
		}

		if (newPostText.length > 2000) {
			return setErrorMessage('Post text too long(maximum 2000 characters)');
		}

		if (newPostPicture && newPostPicture.size > 4 * 1024 * 1024) {
			return setErrorMessage('Picture size is too large');
		}

		return true;
	};

	useEffect(() => {
		if (!errorMessage) return;
		setTimeout(() => setErrorMessage(''), 4000);
	}, [errorMessage]);

	useEffect(() => {
		document.addEventListener('keyup', eventListenerHandler);

		return () => {
			document.removeEventListener('keyup', eventListenerHandler);
		};
	}, []);

	return (
		<>
			{errorMessage && <ShowMessageBox message={errorMessage} isError={true} />}
			<Textarea
				classNames={textareaStyle}
				placeholder="Write here your posts..."
				value={newPostText}
				onValueChange={setNewPostText}
				endContent={
					<OptionData
						setNewPostText={setNewPostText}
						setNewPostPicture={setNewPostPicture}
						newPostPicture={newPostPicture}
						charactersAmount={newPostText.length}
					/>
				}
			/>
			<div className="w-full flex flex-row justify-end">
				<div className="flex flex-row items-end gap-4">
					<Button className="button" onClick={closeEditor}>
						Discard new post
					</Button>
					<Button className="button" onClick={addPost} ref={postButtonRef}>
						Post
					</Button>
				</div>
			</div>
		</>
	);
};

export default NewPostEditor;
