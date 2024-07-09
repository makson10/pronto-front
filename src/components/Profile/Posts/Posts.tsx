import Post from './Post';
import { Posts as PostsType } from '@/types/posts';
import { Profile } from '@/types/profile';
import PostProfileIcon from './PostProfileIcon';
import axios from 'axios';

const Posts = async () => {
	const { data: posts } = await axios.post<PostsType>('/api/getposts');
	if (!posts.length) return;

	const authorId = posts[0].authorId;
	const author = (await axios.post<Profile>('/api/getauthorprofile', authorId))
		.data;

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
