'use client';
import { useState } from 'react';
import NewPostEditor from '../NewPostEditor/NewPostEditor';
import { useParams } from 'next/navigation';
import PostList from './PostList';
import { store } from '@/context/store';

const PostsFlow = () => {
	const userId = store.getState().user?.id;
	const { userId: requestedUserId } = useParams<{ userId: string }>();
	const [showNewPostEditor, setShowNewPostEditor] = useState<boolean>(false);
	const openEditor = () => setShowNewPostEditor(true);
	const closeEditor = () => setShowNewPostEditor(false);

	return (
		<div className="w-[65%] flex-[1] bg-[--main-color] border-[4px] border-[--border-main-color] rounded-xl p-4">
			<div className="h-[75%] flex flex-col gap-4 items-start">
				{showNewPostEditor ? (
					parseInt(requestedUserId) === userId && (
						<NewPostEditor closeEditor={closeEditor} />
					)
				) : (
					<PostList openEditor={openEditor} />
				)}
			</div>
		</div>
	);
};

export default PostsFlow;
