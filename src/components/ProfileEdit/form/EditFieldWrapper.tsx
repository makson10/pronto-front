import { PropsWithChildren } from 'react';

const EditFieldWrapper = ({ children }: PropsWithChildren) => {
	return <div className="w-[60%] flex flex-col gap-6">{children}</div>;
};

export default EditFieldWrapper;
