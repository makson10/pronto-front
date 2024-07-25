import { useState } from 'react';
import NewPostEditor from './NewPostEditor';
import AddNewPostButton from './AddNewPostButton';

const AddNewPost = () => {
	const [showNewPostEditor, setShowNewPostEditor] = useState<boolean>(false);
	const openEditor = () => setShowNewPostEditor(true);
	const closeEditor = () => setShowNewPostEditor(false);

	return (
		<div className="h-fit flex flex-col gap-4 items-start">
			{showNewPostEditor ? (
				<NewPostEditor closeEditor={closeEditor} />
			) : (
				<AddNewPostButton openEditor={openEditor} />
			)}
		</div>
	);
};

export default AddNewPost;
