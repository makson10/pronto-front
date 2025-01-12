import { PropsWithChildren } from 'react';

const EditProfileFormWrapper = ({ children }: PropsWithChildren) => {
	return <div className="flex flex-col gap-8 items-end">{children}</div>;
};

export default EditProfileFormWrapper;
