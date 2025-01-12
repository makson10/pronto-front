'use client';
import { PropsWithChildren } from 'react';
import EditFieldWrapper from './EditFieldWrapper';

interface MainProps extends PropsWithChildren {
	title: string;
	description: string | React.ReactNode;
}

const EditField = ({ title, description, children }: MainProps) => {
	return (
		<EditFieldWrapper>
			<div>
				<FormTitle>{title}</FormTitle>
				{description}
			</div>
			{children}
		</EditFieldWrapper>
	);
};

const FormTitle = ({ children }: PropsWithChildren) => {
	return <p className="font-bold text-lg">{children}</p>;
};

export default EditField;
