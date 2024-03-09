'use client';
import { Button } from '@nextui-org/react';

interface Props {
	setShowNewPostEditor: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function AddNewPostButton({ setShowNewPostEditor }: Props) {
	const handleClick = () => setShowNewPostEditor(true);
	return (
		<Button className="button text-base" onClick={handleClick}>
			Add new post
		</Button>
	);
}
