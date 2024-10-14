import { revalidateTag } from 'next/cache';
import { getUserIdBySession } from '@/assets/sessionUtils';
import { list, del } from '@vercel/blob';
import axios from 'axios';

export const POST = async () => {
	const userId = await getUserIdBySession();
	await deleteOldIcons(userId);
	await sendDeleteIconRequest(userId);

	revalidateTag('getuserprofile');
	return new Response('success', { status: 200 });
};

const deleteOldIcons = async (userId: number) => {
	const oldIconsUrl = await list({ prefix: 'userIcons/' + userId }).then(
		(list) => list.blobs.map((icon) => icon.url)
	);

	if (!oldIconsUrl.length) return;
	await del(oldIconsUrl);
};

const sendDeleteIconRequest = async (userId: number) => {
	return await axios.post(
		process.env.NEXT_PUBLIC_SERVER_BASE_URL + '/profile/deleteicon',
		{ userId }
	);
};
