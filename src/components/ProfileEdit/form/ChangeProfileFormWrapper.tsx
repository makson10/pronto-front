interface Props {
	children: React.ReactNode;
}

export default function ChangeProfileFormWrapper({ children }: Props) {
	return <div className="flex flex-col gap-8 items-end">{children}</div>;
}
