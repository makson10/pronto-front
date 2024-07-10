'use client';
import { useState } from 'react';
import { useParams } from 'next/navigation';
import Posts from './Posts';
import AddNewPostButton from './AddNewPostButton';
import NewPostEditor from '../NewPostEditor/NewPostEditor';
import { store } from '@/context/store';
import Separator from '@/components/ProfileEdit/form/Separator';

export default function PostsFlow() {
	const userId = store.getState().user?.id;
	const requestedUserId = parseInt(useParams<{ userId: string }>().userId);

	return (
		<div className="w-[65%] flex-[1] flex flex-col gap-4 bg-[--main-color] border-[4px] border-[--border-main-color] rounded-xl p-4">
			{requestedUserId === userId && <AddNewPost />}
			<Posts profileId={requestedUserId} />
		</div>
	);
}

const AddNewPost = () => {
	const [showNewPostEditor, setShowNewPostEditor] = useState<boolean>(false);
	const openEditor = () => setShowNewPostEditor(true);
	const closeEditor = () => setShowNewPostEditor(false);

	return (
		<div className="h-fit flex flex-col gap-4 items-start">
			{showNewPostEditor ? (
				<NewPostEditor closeEditor={closeEditor} />
			) : (
				<>
					<AddNewPostButton openEditor={openEditor} />
					<Separator />
				</>
			)}
		</div>
	);
};
