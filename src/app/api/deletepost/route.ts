import { del } from '@vercel/blob';
import { Post } from '@/types/posts';
import axios from 'axios';

export const POST = async (request: Request) => {
	const postId = await request.json();
	const deletingPost = await getDeletingPost(postId);

	if (deletingPost.picture) await del(deletingPost.picture);
	await sendDeletePostRequest(postId);

	return new Response('success', { status: 200 });
};

const getDeletingPost = async (postId: string): Promise<Post> => {
	return await axios
		.get(process.env.NEXT_PUBLIC_LOCAL_SERVER_BASE_URL + '/posts/' + postId)
		.then((res) => res.data);
};

const sendDeletePostRequest = async (postId: number) => {
	return await axios.post(
		process.env.NEXT_PUBLIC_LOCAL_SERVER_BASE_URL + '/posts/deletepost',
		{ postId }
	);
};
