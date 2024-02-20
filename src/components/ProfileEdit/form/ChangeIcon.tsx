import { Button } from '@nextui-org/react';
import EditField from './EditField';
import { useEffect, useState } from 'react';

interface ChangeIconButtonProps {
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface NewIconPreviewProps {
	newIcon: File;
}

interface SubmitChangeIconProps {
	newIcon: File;
	setNewIcon: React.Dispatch<React.SetStateAction<File | null>>;
}

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
	const [newIcon, setNewIcon] = useState<File | null>(null);

	const setIconOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.files) setNewIcon(event.target.files[0]);
	};

	const setIconOnDrop = (event: React.DragEvent<HTMLInputElement>) => {
		setNewIcon(event.dataTransfer.files[0]);
	};

	if (newIcon)
		return (
			<div className="flex flex-col gap-4">
				<NewIconPreview newIcon={newIcon} />
				<div className="flex flex-row gap-4 justify-center">
					<ChangeIconButton onChange={setIconOnChange} />
					<SubmitChangeIcon newIcon={newIcon} setNewIcon={setNewIcon} />
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

const ChangeIconButton = ({ onChange }: ChangeIconButtonProps) => {
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
// make saving icon and pretty animate message
const SubmitChangeIcon = ({ newIcon, setNewIcon }: SubmitChangeIconProps) => {
	const submitChangeIcon = () => {
		console.log('click submit');
		console.log(newIcon);
		setNewIcon(null);
	};

	return (
		<Button
			className="font-bold text-white bg-green-500"
			onClick={submitChangeIcon}>
			Save
		</Button>
	);
};

const NewIconPreview = ({ newIcon }: NewIconPreviewProps) => {
	const [newIconUrl, setNewIconUrl] = useState<string>();

	useEffect(() => {
		setNewIconUrl(URL.createObjectURL(newIcon));
	}, [newIcon]);

	return (
		<div className="h-[250px] flex justify-center items-center">
			<img className="max-h-[250px]" src={newIconUrl} alt="#" />
		</div>
	);
};
