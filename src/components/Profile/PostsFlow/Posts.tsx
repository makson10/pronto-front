import { useParams } from 'next/navigation';
import axios from 'axios';
import { Posts } from '@/types/posts';

export default async function Posts() {
	const { userId } = useParams<{ userId: string }>();
	const posts: Posts = await axios
		.get(process.env.NEXT_PUBLIC_LOCAL_SERVER_BASE_URL + '/posts/' + userId)
		.then(({ data }) => data.posts);

	return (
		<div className="h-fit">
			{posts.map((post, index) => (
				<div key={index}>{JSON.stringify(post)}</div>
			))}
		</div>
	);
}
