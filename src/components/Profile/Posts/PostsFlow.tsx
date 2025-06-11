'use client';
import { PropsWithChildren } from 'react';
import AddNewPost from '../NewPost/AddNewPost';
import { useAppSelector } from '@/store/hooks';
import { Box } from '@mui/material';

const PostsFlow = ({ children }: PropsWithChildren) => {
	const shouldShowAddNewPost = useAppSelector(
		(state) => state.requestedProfile.isAuthorWatchProfile,
	);

	const addingNewPost = useAppSelector((state) => state.profile.addingNewPost);

	return (
		<Box
			sx={{
				width: '65%',
				flex: '1',
				display: 'flex',
				flexDirection: 'column',
				gap: '16px',
				backgroundColor: 'var(--main-color)',
				borderWidth: '4px',
				borderColor: 'var(--border-main-color)',
				borderRadius: '12px',
				padding: '1rem',
			}}>
			{shouldShowAddNewPost && <AddNewPost />}
			{!addingNewPost && children}
		</Box>
	);
};

export default PostsFlow;
