interface Props {
	children: React.ReactNode;
}

const SubmitChangesButtonWrapper = ({ children }: Props) => {
	return (
		<div className="w-full pt-6 flex flex-row justify-end">{children}</div>
	);
}

export default SubmitChangesButtonWrapper;