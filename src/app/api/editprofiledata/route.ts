import { revalidateTag } from 'next/cache';
import { getUserIdBySession } from '@/assets/sessionUtils';
import axios from 'axios';

export const dynamic = 'force-dynamic';

interface Body {
	userId: number;
	newProfileData: NewProfileData;
}

interface NewProfileData {
	dateOfBirth: string;
	description: string;
	city: string;
}

export const POST = async (request: Request) => {
	const newProfileData = await request.json();
	const userId = await getUserIdBySession();

	sendEditProfileDataRequest({ userId, newProfileData });
	revalidateTag('getuserprofile');
	return new Response('success', { status: 200 });
};

const sendEditProfileDataRequest = async (body: Body) => {
	return await axios.post(
		process.env.NEXT_PUBLIC_LOCAL_SERVER_BASE_URL + '/profile/editdata',
		body
	);
};
