import { Button, Input } from '@nextui-org/react';
import EditField from './EditField';
import { use, useEffect, useState } from 'react';

export default function ChangeIcon() {
	return (
		<EditField
			title="Icon"
			description={
				<p>
					Here you can set ur cuty face that other users can see you and{' '}
					<u>jerk off</u>
				</p>
			}>
			<DropdownInput />
		</EditField>
	);
}

const DropdownInput = () => {
	const [newUserIcon, setNewUserIcon] = useState<File>();

	const setIconOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.files) setNewUserIcon(event.target.files[0]);
	};

	const setIconOnDrop = (event: React.DragEvent<HTMLInputElement>) => {
		setNewUserIcon(event.dataTransfer.files[0]);
	};

	useEffect(() => {
		console.log(newUserIcon);
	}, [newUserIcon]);

	if (newUserIcon)
		return (
			<div>
				<NewIconPreview />
				<div>
					<Button>Change icon</Button>
					<Button>Submit</Button>
				</div>
			</div>
		);

	return (
		<div className="flex flex-row gap-2">
			<label htmlFor="dropdown-file" className="w-full">
				<div className="cursor-pointer py-4 bg-gray-700 flex flex-row gap-2 justify-center items-center border-2 border-gray-400 rounded-lg">
					<img
						width={24}
						height={24}
						src="https://img.icons8.com/ios/100/ffffff/upload-to-cloud--v1.png"
						alt="#"
					/>
					<p>Upload</p>
				</div>
				<input
					id="dropdown-file"
					type="file"
					className="hidden"
					accept="image/*"
					onChange={setIconOnChange}
					onDrop={setIconOnDrop}
					draggable="true"
				/>
			</label>
		</div>
	);
};

const NewIconPreview = () => {
	return <div></div>;
};
