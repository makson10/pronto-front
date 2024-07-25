'use client';
import { useParams } from 'next/navigation';
import { store } from '@/context/store';
import AddNewPost from '../NewPost/AddNewPost';

interface Props {
	children: React.ReactNode;
}

type ParamsType = {
	profileId: string;
};

export default function PostsFlow({ children }: Props) {
	const userId = store.getState().user?.id;
	const requestedUserId = parseInt(useParams<ParamsType>().profileId);

	return (
		<div className="w-[65%] flex-[1] flex flex-col gap-4 bg-[--main-color] border-[4px] border-[--border-main-color] rounded-xl p-4">
			{requestedUserId === userId && <AddNewPost />}
			{children}
		</div>
	);
}
