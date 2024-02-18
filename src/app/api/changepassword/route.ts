import { getUserIdBySession } from '../sessionUtils';
import axios from 'axios';

export const dynamic = 'force-dynamic';

interface Body {
	userId: string;
	oldPassword: string;
	newPassword: string;
}

export async function POST(request: Request) {
	const { oldPassword, newPassword } = await request.json();
	const userId = await getUserIdBySession();
	if (!userId) return new Response('error', { status: 400 });

	await sendChangePasswordRequest({ userId, oldPassword, newPassword });
	return Response.json('success', { status: 200 });
}

const sendChangePasswordRequest = async (body: Body) => {
	const req = await axios.post(
		process.env.NEXT_PUBLIC_LOCAL_SERVER_BASE_URL + '/profile/changepassword',
		body
	);

	console.log(req);
	return req.data;
};
