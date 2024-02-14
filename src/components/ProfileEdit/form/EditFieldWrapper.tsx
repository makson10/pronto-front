interface Props {
	children: React.ReactNode;
}

export default function EditFieldWrapper({ children }: Props) {
	return <div className="w-[60%] flex flex-col gap-6">{children}</div>;
}
