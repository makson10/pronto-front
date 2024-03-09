import axios from 'axios';
import { NextResponse } from 'next/server';
import { getUserIdBySession } from '../sessionUtils';

export const dynamic = 'force-dynamic';

interface Body {
	userId: number;
	newPost: {
		text: string;
		picture: string | null;
	};
}

export async function POST(request: Request) {
	const body = await request.json();
	const userId = await getUserIdBySession();
	if (!userId) return new Response('error', { status: 400 });

	return await sendMakeNewPostRequest({ userId, ...body });
}

const sendMakeNewPostRequest = async (body: Body) => {
	try {
		await axios.post(
			process.env.NEXT_PUBLIC_LOCAL_SERVER_BASE_URL + '/profile/makenewpost',
			body
		);
		return NextResponse.json('success', { status: 200 });
	} catch (error: any) {
		return NextResponse.json(error.response.data.message, { status: 400 });
	}
};
