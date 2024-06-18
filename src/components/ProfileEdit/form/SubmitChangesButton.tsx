import { Button } from '@nextui-org/react';

interface Props {
	handleSubmit: React.MouseEventHandler<HTMLButtonElement>;
}

const SubmitChangesButton = ({ handleSubmit }: Props) => {
	return (
		<Button className="button" onClick={handleSubmit}>
			Submit changes
		</Button>
	);
};

export default SubmitChangesButton;
