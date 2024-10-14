'use client';
import AddNewPost from '../NewPost/AddNewPost';
import { store } from '@/context/store';

interface Props {
	children: React.ReactNode;
}

const PostsFlow = ({ children }: Props) => {
	const showAddNewPost = store.getState().profile?.isAuthorWatchProfile;

	return (
		<div className="w-[65%] flex-[1] flex flex-col gap-4 bg-[--main-color] border-[4px] border-[--border-main-color] rounded-xl p-4">
			{showAddNewPost && <AddNewPost />}
			{children}
		</div>
	);
};

export default PostsFlow;
