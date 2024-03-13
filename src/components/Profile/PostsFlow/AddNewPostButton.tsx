'use client';
import { Button } from '@nextui-org/react';

interface Props {
	openEditor: (event?: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function AddNewPostButton({ openEditor }: Props) {
	return (
		<Button className="button text-base" onClick={openEditor}>
			Add new post
		</Button>
	);
}
