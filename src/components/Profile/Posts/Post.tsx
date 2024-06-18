import { Post as PostType } from '@/types/posts';

interface Props {
	data: PostType;
	authorFullName: string;
	authorIcon: JSX.Element;
}

export default function Post({ authorFullName, authorIcon, data }: Props) {
	return (
		<div className="bg-[--border-main-color] rounded-xl p-4">
			<p>{authorFullName}</p>
			<p>{new Date(data.createdAt).toDateString()}</p>
			<p>{data.text}</p>
			{authorIcon}
		</div>
	);
}
