import { NextResponse } from 'next/server';
import axios from 'axios';
import { Posts } from '@/types/posts';

export const dynamic = 'force-dynamic';

export const POST = async (request: Request) => {
	const userId = await request.json();
	if (!userId) return new Response('error', { status: 400 });

	const posts = await getUserPosts(userId);
	return Response.json(posts, { status: 200 });
};

const getUserPosts = async (userId: number) => {
	try {
		return await axios
			.get<Posts>(
				process.env.NEXT_PUBLIC_SERVER_BASE_URL + '/posts/author/' + userId
			)
			.then((res) => res.data);
	} catch (error: any) {
		return NextResponse.json(error.response.data.message, { status: 400 });
	}
};
