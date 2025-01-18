import { SignUpUser } from '@/types/user';
import {
	extructSessionFromRequest,
	setNewSession,
} from '@/assets/sessionUtils';
import axios from 'axios';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export const POST = async (request: Request) => {
	const body = await request.json();
	const user = body.user;
	return await sendSignUpRequest(user);
};

const sendSignUpRequest = async (user: SignUpUser) => {
	try {
		const signUpResponse = await axios.post(
			process.env.NEXT_PUBLIC_SERVER_BASE_URL + '/user/signup',
			{ user },
		);

		const session = await extructSessionFromRequest(signUpResponse);
		await setNewSession(session);

		return NextResponse.json(signUpResponse.data, { status: 200 });
	} catch (error: any) {
		return NextResponse.json(error.response.data.message, { status: 400 });
	}
};
