import axios from 'axios';
import { getUserIdBySession } from '@/assets/sessionUtils';
import { revalidateTag } from 'next/cache';

export const dynamic = 'force-dynamic';

export const POST = async (request: Request) => {
	const userId = await getUserIdBySession();
	if (!userId) return new Response('error', { status: 400 });

	await sendVerificationRequest(userId);
	revalidateProfileData();
	return new Response('success', { status: 200 });
};

const sendVerificationRequest = async (userId: number) => {
	return await axios.post(
		process.env.NEXT_PUBLIC_SERVER_BASE_URL +
			'/profile/addusertoverificationrequestlist',
		{ userId }
	);
};

const revalidateProfileData = () => revalidateTag('getuserprofile');
