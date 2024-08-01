interface Props {
	charactersAmount: number;
}

const CharacterCounter = ({ charactersAmount }: Props) => {
	return (
		<div className="leading-[2] mr-1 text-gray-500">
			{charactersAmount} characters
		</div>
	);
};

export default CharacterCounter;
