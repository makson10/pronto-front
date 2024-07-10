import Post from './Post';
import { Posts as PostsType } from '@/types/posts';
import { Profile } from '@/types/profile';
import PostProfileIcon from './PostProfileIcon';
import axios from 'axios';
import NoPostsMessage from './NoPostsMessage';

interface Props {
	profileId: number;
}

const Posts = async ({ profileId }: Props) => {
	const { data: posts } = await axios.post<PostsType>(
		'/api/getposts',
		profileId
	);
	if (!posts.length) return <NoPostsMessage />;

	const author = (await axios.post<Profile>('/api/getauthorprofile', profileId))
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
