'use client';
import { useState } from 'react';
import { formatDate } from '../../../assets/formatDate';
import PostManagementButton from './PostManagementButton';
import { Post as PostType } from '@/types/posts';
import { store } from '@/context/store';
import Image from 'next/image';

interface Props {
	authorFullName: string;
	authorIcon: JSX.Element;
	data: PostType;
}

const MAX_DISPLAYABLE_CHARACTER_AMOUNT = 700;

const Post = ({ authorFullName, authorIcon, data }: Props) => {
	const showPostManagementButton =
		store.getState().profile?.isAuthorWatchProfile;

	const [needToShowEntireText, setNeedToShowEntireText] = useState(false);
	const showEntireText = () => setNeedToShowEntireText(true);
	const hideEntireText = () => setNeedToShowEntireText(false);

	return (
		<div
			className="flex flex-col gap-4 bg-[--second-bg-color] border-[--border-main-color] border-[4px] rounded-xl p-4"
			id={data.postId.toString()}>
			<div className="flex flex-row justify-between">
				<div className="flex flex-row gap-2">
					<div className="relative min-w-fit w-fit max-w-fit">{authorIcon}</div>
					<div>
						<p className="text-lg">{authorFullName}</p>
						<p className="text-sm opacity-50">{formatDate(data.createdAt)}</p>
					</div>
				</div>
				{showPostManagementButton && (
					<PostManagementButton postId={data.postId} />
				)}
			</div>
			<div className="text-lg whitespace-pre-line flex flex-col gap-2">
				{!needToShowEntireText ? (
					<>
						<p>{data.text.slice(0, MAX_DISPLAYABLE_CHARACTER_AMOUNT)}</p>
						{data.text.length > MAX_DISPLAYABLE_CHARACTER_AMOUNT && (
							<button className="w-full" onClick={showEntireText}>
								Read further &#9660;
							</button>
						)}
					</>
				) : (
					<>
						<p>{data.text}</p>
						{data.text.length > MAX_DISPLAYABLE_CHARACTER_AMOUNT && (
							<button className="w-full" onClick={hideEntireText}>
								Show less &#9650;
							</button>
						)}
					</>
				)}
			</div>
			{data.picture && (
				<div className="mt-1 flex flex-row justify-center">
					<Image src={data.picture} alt="#" width={200} height={200} />
				</div>
			)}
		</div>
	);
};

export default Post;
