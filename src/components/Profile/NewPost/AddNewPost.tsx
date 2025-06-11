import { useState } from 'react';
import NewPostEditor from './NewPostEditor';
import AddNewPostButton from './AddNewPostButton';
import {
	closeNewPostEditor,
	openNewPostEditor,
} from '@/store/profile/profileSlice';
import { useAppDispatch } from '@/store/hooks';
import { Box } from '@mui/material';

const AddNewPost = () => {
	const [showNewPostEditor, setShowNewPostEditor] = useState<boolean>(false);
	const dispatch = useAppDispatch();

	const openEditor = () => {
		dispatch(openNewPostEditor());
		setShowNewPostEditor(true);
	};

	const closeEditor = () => {
		dispatch(closeNewPostEditor());
		setShowNewPostEditor(false);
	};

	return (
		<Box
			sx={{
				height: 'fit-content',
				display: 'flex',
				flexDirection: 'column',
				gap: '1rem',
				alignItems: 'flex-start',
			}}>
			{showNewPostEditor ? (
				<NewPostEditor closeEditor={closeEditor} />
			) : (
				<AddNewPostButton openEditor={openEditor} />
			)}
		</Box>
	);
};

export default AddNewPost;
