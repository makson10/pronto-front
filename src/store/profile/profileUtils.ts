import { Profile } from '@/types/profile';

export const getProfile = async (
	profileId: number
): Promise<Profile | null> => {
	if (!profileId) throw new Error('Profile not found');

	const res = await fetch(
		process.env.NEXT_PUBLIC_SERVER_BASE_URL + '/profile/getprofile',
		{
			method: 'POST',
			body: JSON.stringify({ userId: profileId }),
			headers: {
				'Content-Type': 'application/json',
			},
			next: { revalidate: 3600, tags: ['getuserprofile'] },
		}
	).then((response) => response.json());

	if (res.error) throw new Error('Error occured during getting profile');
	return res;
};
