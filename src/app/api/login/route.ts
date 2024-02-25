import { SignUpUser } from '@/types/userTypes';
import { getSessionFromRequest, setNewSession } from '../sessionUtils';
import axios from 'axios';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
	const user = await request.json().then((data) => data.user);
	return await sendLogInRequest(user);
}

const sendLogInRequest = async (user: SignUpUser) => {
	try {
		const logInResponse = await axios.post(
			process.env.NEXT_PUBLIC_LOCAL_SERVER_BASE_URL + '/user/login',
			{ user }
		);

		const newSession = await getSessionFromRequest(logInResponse);
		setNewSession(newSession);

		return NextResponse.json('success', { status: 200 });
	} catch (error: any) {
		return NextResponse.json(error.response.data.message, { status: 400 });
	}
};
