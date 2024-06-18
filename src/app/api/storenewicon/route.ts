import { del, list, put } from '@vercel/blob';
import { getUserIdBySession } from '../sessionUtils';
import axios from 'axios';
import { revalidateTag } from 'next/cache';

export const dynamic = 'force-dynamic';

interface Body {
	userId: number;
	newIconUrl: string;
}

export const POST = async (request: Request) => {
	const userId = await getUserIdBySession();

	await deleteAllOldIcons(userId);
	const newIconUrl = await storeNewIcon(userId, request.body);
	sendChangeIconRequest({ userId, newIconUrl });

	revalidateTag('getuserprofile');
	return new Response('success', { status: 200 });
};

const deleteAllOldIcons = async (userId: number) => {
	const oldIconsUrl = await list({ prefix: 'userIcons/' + userId }).then(
		(list) => list.blobs.map((icon) => icon.url)
	);

	if (!oldIconsUrl.length) return;
	await del(oldIconsUrl);
};

const storeNewIcon = async (userId: number, file: any) => {
	const fileName = 'userIcons/' + userId;

	const { url } = await put(fileName, file, {
		access: 'public',
		contentType: 'image/png',
	});

	return url;
};

const sendChangeIconRequest = async (body: Body) => {
	return await axios.post(
		process.env.NEXT_PUBLIC_LOCAL_SERVER_BASE_URL + '/profile/changeicon',
		body
	);
};
