interface Props {
	children: React.ReactNode;
}

const ProfileContentWrapper = ({ children }: Props) => {
	return <div className="flex flex-row gap-4">{children}</div>;
};

export default ProfileContentWrapper;
