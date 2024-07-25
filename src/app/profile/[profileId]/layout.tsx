import { getProfile } from '@/assets/sessionUtils';
import { storeProfile } from '@/context/storeUtils';

interface Props {
	children: React.ReactNode;
	params: {
		profileId: string;
	};
}

// interface MetadataProps {
// 	params: { profileId: string };
// }

const Layout = async ({ children, params: { profileId } }: Props) => {
	const profile = await getProfile(profileId);
	await storeProfile(profile);

	return <>{children}</>;
};

// export const generateMetadata = async ({ params }: MetadataProps) => {
// 	const requestedProfileId = params.profileId;
// 	const userId = await getUserIdBySession();

// 	console.log(requestedProfileId, userId);

// 	const title = requestedProfileId === userId ? 'My profile' : 'Profile';

// 	return {
// 		title,
// 		openGraph: {
// 			title,
// 		},
// 	};
// };

export default Layout;
