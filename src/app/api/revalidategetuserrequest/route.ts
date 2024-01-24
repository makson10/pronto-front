import { revalidateTag } from 'next/cache';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
	revalidateTag('getUserRequest');
	return new Response('success', { status: 200 });
}
