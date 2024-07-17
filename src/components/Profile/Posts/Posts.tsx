import Post from './Post';
import PostProfileIcon from './PostProfileIcon';
import NoPostsMessage from './NoPostsMessage';
import { Posts as PostsType } from '@/types/posts';
import { store } from '@/context/store';
import axios from 'axios';

const Posts = async () => {
	const author = store.getState().profile!;

	const { data: posts } = await axios.post<PostsType>(
		process.env.NEXT_PUBLIC_FRONT_BASE_URL + '/api/getposts',
		author.profileId.toString()
	);

	if (!posts.length) return <NoPostsMessage />;

	return (
		<div className="w-full h-fit flex flex-col gap-6">
			{posts.map((post, index) => (
				<Post
					key={index}
					authorFullName={author.name}
					authorIcon={
						<PostProfileIcon
							iconUrl={author.icon}
							altIconText={author.name[0]}
						/>
					}
					data={post}
				/>
			))}
		</div>
	);
};

export default Posts;
