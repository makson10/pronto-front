'use client';
import { PropsWithChildren } from 'react';
import AddNewPost from '../NewPost/AddNewPost';
import { useAppSelector } from '@/store/hooks';

export default function PostsFlow({ children }: PropsWithChildren) {
	const shouldShowAddNewPost = useAppSelector(
		(state) => state.requestedProfile.isAuthorWatchProfile
	);

	return (
		<div className="w-[65%] flex-[1] flex flex-col gap-4 bg-[--main-color] border-[4px] border-[--border-main-color] rounded-xl p-4">
			{shouldShowAddNewPost && <AddNewPost />}
			{children}
		</div>
	);
}
