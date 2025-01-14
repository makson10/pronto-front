import { revalidateTag } from 'next/cache';

export const dynamic = 'force-dynamic';

export const POST = async (request: Request) => {
	const tag = await request.json().then((data) => data.tag);
	revalidateTag(tag);
	return new Response('success', { status: 200 });
}
