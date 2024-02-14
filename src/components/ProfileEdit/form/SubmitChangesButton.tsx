interface Props {
	handleSubmit: React.MouseEventHandler<HTMLButtonElement>;
}

export default function SubmitChangesButton({ handleSubmit }: Props) {
	return (
		<button
			className="bg-blue-700 text-white text-lg font-bold py-2 px-4 rounded transition duration-200 ease-in-out hover:bg-blue-800"
			onClick={handleSubmit}>
			Submit changes
		</button>
	);
}
