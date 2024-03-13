'use client';
import { useState } from 'react';
import AddNewPostButton from './PostsFlow/AddNewPostButton';
import NewPostEditor from './PostsFlow/NewPostEditor';
import Separator from '../ProfileEdit/form/Separator';
import { store } from '@/context/store';
import { useParams } from 'next/navigation';
import Posts from './PostsFlow/Posts';

export default function PostsFlow() {
	const userId = store.getState().user?.id;
	const { userId: requestedUserId } = useParams<{ userId: string }>();

	return (
		<div className="w-[65%] flex-[1] bg-[--main-color] border-[4px] border-[--border-main-color] rounded-xl p-4">
			{parseInt(requestedUserId) === userId && <AddNewPost />}
		</div>
	);
}

const AddNewPost = () => {
	const [showNewPostEditor, setShowNewPostEditor] = useState<boolean>(false);
	const openEditor = () => setShowNewPostEditor(true);
	const closeEditor = () => setShowNewPostEditor(false);

	return (
		<div className="h-[75%] flex flex-col gap-4 items-start">
			{showNewPostEditor ? (
				<NewPostEditor closeEditor={closeEditor} />
			) : (
				<>
					<AddNewPostButton openEditor={openEditor} />
					<Separator />
					<Posts />
				</>
			)}
		</div>
	);
};
