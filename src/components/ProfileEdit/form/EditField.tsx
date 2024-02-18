'use client';
import EditFieldWrapper from './EditFieldWrapper';

interface MainProps {
	title: string;
	description: string | React.ReactNode;
	children: React.ReactNode;
}

interface FormTitleProps {
	children: React.ReactNode;
}

export default function EditField({ title, description, children }: MainProps) {
	return (
		<EditFieldWrapper>
			<div>
				<FormTitle>{title}</FormTitle>
				{description}
			</div>
			{children}
		</EditFieldWrapper>
	);
}

const FormTitle = ({ children }: FormTitleProps) => {
	return <p className="font-bold text-lg">{children}</p>;
};
