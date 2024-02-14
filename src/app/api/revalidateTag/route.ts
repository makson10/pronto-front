import { revalidateTag } from 'next/cache';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
	const tag = await request.json().then((data) => data.tag);
	revalidateTag(tag);
	return new Response('success', { status: 200 });
}
