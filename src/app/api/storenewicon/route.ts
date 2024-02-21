import { put } from '@vercel/blob';
import { getUserIdBySession } from '../sessionUtils';
import axios from 'axios';
import { revalidateTag } from 'next/cache';

export const dynamic = 'force-dynamic';

interface Body {
	userId: number;
	newIconUrl: string;
}

export async function POST(request: Request) {
	const userId = await getUserIdBySession();
	const fileName = 'userIcons/' + userId.toString();

	const { url: newIconUrl } = await put(fileName, request.body!, {
		access: 'public',
		contentType: 'image/png',
	});

	sendChangeIconRequest({ userId, newIconUrl });
	revalidateTag('getuserprofile');
	return new Response('success', { status: 200 });
}

const sendChangeIconRequest = async (body: Body) => {
	return await axios.post(
		process.env.NEXT_PUBLIC_LOCAL_SERVER_BASE_URL + '/profile/changeicon',
		body
	);
};
