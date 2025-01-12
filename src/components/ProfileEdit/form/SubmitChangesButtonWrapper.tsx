import { PropsWithChildren } from 'react';

const SubmitChangesButtonWrapper = ({ children }: PropsWithChildren) => {
	return (
		<div className="w-full pt-6 flex flex-row justify-end">{children}</div>
	);
};

export default SubmitChangesButtonWrapper;
