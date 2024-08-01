import { getProfile } from '@/assets/sessionUtils';
import { storeProfile } from '@/context/storeUtils';

interface Props {
	children: React.ReactNode;
	params: {
		profileId: string;
	};
}

const Layout = async ({ children, params: { profileId } }: Props) => {
	const profile = await getProfile(profileId);
	await storeProfile(profile);

	return <>{children}</>;
};

export default Layout;
