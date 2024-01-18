import { SignUpUser } from '@/types/userTypes';
import { getSessionFromRequest, setNewSession } from '../sessionUtils';
import axios from 'axios';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
	const user = await request.json().then((data) => data.user);
	const logInResponse = await sendLogInRequest(user);
	if (!logInResponse.data.isAuthorized)
		return new Response('error', { status: 400 });

	const session = await getSessionFromRequest(logInResponse);
	setNewSession(session);
	return new Response('success', { status: 200 });
}

const sendLogInRequest = async (user: SignUpUser) => {
	return await axios.post(
		process.env.NEXT_PUBLIC_LOCAL_SERVER_BASE_URL + '/user/login',
		{ user }
	);
};
