import Post from './Post';
import PostProfileIcon from './PostProfileIcon';
import NoPostsMessage from './NoPostsMessage';
import { Posts as PostsType } from '@/types/posts';
import { Profile } from '@/types/profile';
import axios from 'axios';

interface Props {
	author: Profile;
	posts: PostsType;
}

const Posts = async ({ author, posts }: Props) => {
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
