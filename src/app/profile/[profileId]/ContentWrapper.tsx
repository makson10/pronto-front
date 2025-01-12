import { PropsWithChildren } from 'react';

const ProfileContentWrapper = ({ children }: PropsWithChildren) => {
	return <div className="flex flex-row gap-4">{children}</div>;
};

export default ProfileContentWrapper;
