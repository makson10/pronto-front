import { NextResponse } from 'next/server';
import { getUserIdBySession } from '../sessionUtils';
import axios from 'axios';

export const dynamic = 'force-dynamic';

interface Body {
	userId: string;
	oldPassword: string;
	newPassword: string;
}

export const POST = async (request: Request) => {
	const { oldPassword, newPassword } = await request.json();
	const userId = await getUserIdBySession();
	if (!userId) return new Response('error', { status: 400 });

	return await sendChangePasswordRequest({
		userId,
		oldPassword,
		newPassword,
	});
};

const sendChangePasswordRequest = async (body: Body) => {
	try {
		await axios.post(
			process.env.NEXT_PUBLIC_LOCAL_SERVER_BASE_URL + '/profile/changepassword',
			body
		);
		return NextResponse.json('success', { status: 200 });
	} catch (error: any) {
		return NextResponse.json(error.response.data.message, { status: 401 });
	}
};
