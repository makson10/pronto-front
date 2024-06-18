interface Props {
	children: React.ReactNode;
}

const EditFieldWrapper = ({ children }: Props) => {
	return <div className="w-[60%] flex flex-col gap-6">{children}</div>;
};

export default EditFieldWrapper;
