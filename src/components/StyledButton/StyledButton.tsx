import { Button } from '@nextui-org/react';

const StyledButton = (props: React.ComponentProps<typeof Button>) => (
	<Button
		style={{
			backgroundColor: 'white',
			fontWeight: 'bold',
			fontSize: '16px',
			lineHeight: '24px',
		}}
		{...props}>
		{props.children}
	</Button>
);

export default StyledButton;
