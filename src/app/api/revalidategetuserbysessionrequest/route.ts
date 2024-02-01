import { revalidateTag } from 'next/cache';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
	revalidateTag('getUserBySessionRequest');
	return new Response('success', { status: 200 });
}
