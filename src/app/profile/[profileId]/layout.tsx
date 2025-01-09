import { getProfile } from '@/assets/sessionUtils';
import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
	params: {
		profileId: string;
	};
}

const Layout = async ({ children, params: { profileId } }: Props) => {
	// const profile = await getProfile(profileId);
	// await storeProfile(profile);

	return <>{children}</>;
};

export default Layout;
