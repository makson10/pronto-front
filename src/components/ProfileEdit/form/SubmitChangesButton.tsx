import StyledButton from '@/components/StyledButton/StyledButton';
import { Button } from '@nextui-org/react';

interface Props {
	handleSubmit: React.MouseEventHandler<HTMLButtonElement>;
}

const SubmitChangesButton = ({ handleSubmit }: Props) => (
	<StyledButton onClick={handleSubmit}>Submit changes</StyledButton>
);

export default SubmitChangesButton;
