import { NextResponse } from 'next/server';
import axios from 'axios';

export const dynamic = 'force-dynamic';

export const POST = async (request: Request) => {
	const userId = await request.json();
	if (!userId) return new Response('error', { status: 400 });

	return await getUserPosts(userId);
};

const getUserPosts = async (userId: number) => {
	try {
		const { data: posts } = await axios.get(
			process.env.NEXT_PUBLIC_LOCAL_SERVER_BASE_URL + '/posts/' + userId
		);
		return NextResponse.json(posts, { status: 200 });
	} catch (error: any) {
		return NextResponse.json(error.response.data.message, { status: 400 });
	}
};
