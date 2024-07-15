import { formatDate } from '../../../assets/formatDate';
import { Post as PostType } from '@/types/posts';

interface Props {
	authorFullName: string;
	authorIcon: JSX.Element;
	data: PostType;
}

const Post = ({ authorFullName, authorIcon, data }: Props) => {
	return (
		<div className="flex flex-col gap-3 bg-[--second-bg-color] border-[--border-main-color] border-[4px] rounded-xl p-4">
			<div className="w-fit flex flex-row gap-2">
				<div className="relative min-w-fit w-fit max-w-fit">{authorIcon}</div>
				<div>
					<p className="text-lg">{authorFullName}</p>
					<p className="text-sm opacity-50">{formatDate(data.createdAt)}</p>
				</div>
			</div>
			<p className="text-lg">{data.text}</p>
		</div>
	);
};

export default Post;
