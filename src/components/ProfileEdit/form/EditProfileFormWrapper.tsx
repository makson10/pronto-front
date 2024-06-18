interface Props {
	children: React.ReactNode;
}

const EditProfileFormWrapper = ({ children }: Props) => {
	return <div className="flex flex-col gap-8 items-end">{children}</div>;
};

export default EditProfileFormWrapper;
