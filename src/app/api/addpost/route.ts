import { NextResponse } from 'next/server';
import { getUserIdBySession } from '@/assets/sessionUtils';
import axios from 'axios';

export const dynamic = 'force-dynamic';

interface Body {
	authorId: number;
	text: string;
	picture: string | null;
}

export const POST = async (request: Request) => {
	const body = await request.json();
	const userId = await getUserIdBySession();
	if (!userId) return new Response('error', { status: 400 });

	return await sendMakeNewPostRequest({ authorId: userId, ...body });
};

const sendMakeNewPostRequest = async (body: Body) => {
	try {
		await axios.post(
			process.env.NEXT_PUBLIC_LOCAL_SERVER_BASE_URL + '/posts/addpost',
			body
		);
		return NextResponse.json('success', { status: 200 });
	} catch (error: any) {
		return NextResponse.json(error.response.data.message, { status: 400 });
	}
};
