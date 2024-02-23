import { Button } from '@nextui-org/react';

interface Props {
	handleSubmit: React.MouseEventHandler<HTMLButtonElement>;
}

export default function SubmitChangesButton({ handleSubmit }: Props) {
	return (
		<Button className="bg-white font-bold text-base" onClick={handleSubmit}>
			Submit changes
		</Button>
	);
}
