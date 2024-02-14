interface Props {
	children: React.ReactNode;
}

export default function SubmitChangesButtonWrapper({ children }: Props) {
	return (
		<div className="w-full pt-6 flex flex-row justify-end">{children}</div>
	);
}
