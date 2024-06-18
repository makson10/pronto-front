interface Props {
	data: {
		name: string;
		isVerifed: boolean;
		createdAt: string;
	};
}

const Name = ({ data: { name, isVerifed, createdAt } }: Props) => {
	const userRegistrationDate = new Date(createdAt).toLocaleDateString();

	return (
		<div className="flex flex-row gap-2 items-center" aria-label="profile-name">
			<p className="text-2xl">{name}</p>
			{isVerifed && <VerifedUserIcon />}
			<div className="h-full flex flex-col justify-end">
				<p className="text-gray-500 text-sm mb-[1px]">
					in pronto from {userRegistrationDate}
				</p>
			</div>
		</div>
	);
};

const VerifedUserIcon = () => <div className="w-[20px]">✔</div>;

export default Name;
