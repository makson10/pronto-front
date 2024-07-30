import { put, list } from '@vercel/blob';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export const POST = async (request: Request) => {
	const image = request.body;
	return await storePostPicture(image);
};

const getImageName = async () => {
	const imageId = Math.floor(Math.random() * 1000000);
	const imageWithThisId = await list({ prefix: 'postImages/' + imageId }).then(
		(res) => res.blobs
	);

	if (imageWithThisId.length) return getImageName();
	return 'postImages/' + imageId;
};

const storePostPicture = async (image: any) => {
	const fileName = await getImageName();

	const { url } = await put(fileName, image, {
		access: 'public',
		contentType: 'image/png',
	});

	return NextResponse.json(url, { status: 200 });
};
