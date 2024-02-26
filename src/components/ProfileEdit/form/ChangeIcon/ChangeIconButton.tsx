import { Button } from '@nextui-org/react';

interface Props {
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ChangeIconButton = ({ onChange }: Props) => {
	return (
		<Button className="bg-white">
			<label htmlFor="change-icon">
				<div className="font-bold bg-white">
					<p>Change icon</p>
				</div>
				<input
					id="change-icon"
					type="file"
					accept="image/*"
					onChange={onChange}
					className="hidden"
				/>
			</label>
		</Button>
	);
};

export default ChangeIconButton;
