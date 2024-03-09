import { Button } from '@nextui-org/react';

interface Props {
	handleSubmit: React.MouseEventHandler<HTMLButtonElement>;
}

export default function SubmitChangesButton({ handleSubmit }: Props) {
	return (
		<Button className="button" onClick={handleSubmit}>
			Submit changes
		</Button>
	);
}
