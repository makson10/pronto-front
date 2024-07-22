import axios from 'axios';

export const POST = async (request: Request) => {
	const postId = await request.json();
	await sendDeletePostRequest(postId);

	return new Response('success', { status: 200 });
};

const sendDeletePostRequest = async (postId: number) => {
	return await axios.post(
		process.env.NEXT_PUBLIC_LOCAL_SERVER_BASE_URL + '/posts/deletepost',
		{ postId }
	);
};
