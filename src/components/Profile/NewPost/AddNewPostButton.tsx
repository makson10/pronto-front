'use client';
import { Button } from '@nextui-org/react';

interface Props {
	openEditor: (event?: React.MouseEvent<HTMLButtonElement>) => void;
}

const AddNewPostButton = ({ openEditor }: Props) => {
	return (
		<div className="w-full flex flex-row justify-end">
			<Button className="min-h-[40px] button text-base" onClick={openEditor}>
				Add new post
			</Button>
		</div>
	);
};

export default AddNewPostButton;
