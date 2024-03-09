'use client';
import { useState } from 'react';
import AddNewPostButton from './PostsFlow/AddNewPostButton';
import NewPostEditor from './PostsFlow/NewPostEditor';
import Separator from '../ProfileEdit/form/Separator';
import { store } from '@/context/store';
import { useParams } from 'next/navigation';

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
	const [showNewPostEditor, setShowNewPostEditor] = useState<boolean>(true);
	const closeEditor = () => setShowNewPostEditor(false);

	return (
		<div className="h-full flex flex-col gap-4 items-start">
			{showNewPostEditor ? (
				<NewPostEditor closeEditor={closeEditor} />
			) : (
				<>
					<AddNewPostButton setShowNewPostEditor={setShowNewPostEditor} />
					<Separator />
				</>
			)}
		</div>
	);
};
