interface Props {
	children: React.ReactNode;
}

export default function ProfileContentWrapper({ children }: Props) {
	return <div className="flex flex-row gap-4">{children}</div>;
}
