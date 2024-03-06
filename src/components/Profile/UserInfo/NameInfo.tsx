interface Props {
	data: {
		name: string;
		isVerifed: boolean;
		createdAt: string;
	};
}

const NameInfo = ({ data: { name, isVerifed, createdAt } }: Props) => {
	const userRegistrationDate = new Date(createdAt).toLocaleDateString();

	return (
		<div className="flex flex-row gap-2 items-center" aria-label="profile-name">
			<p className="text-2xl">{name}</p>
			{isVerifed && <VerifedUserIcon />}
			<p className="text-gray-500 text-sm">
				in pronto from {userRegistrationDate}
			</p>
		</div>
	);
};

const VerifedUserIcon = () => <div className="w-[20px]">✔</div>;

export default NameInfo;
