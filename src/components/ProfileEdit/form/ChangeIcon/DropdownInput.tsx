import { useState } from 'react';
import ChangeIconButton from './ChangeIconButton';
import { ShowMessageBox } from '@/components/MessageBox';
import NewIconPreview from './NewIconPreview';
import SubmitChangeIcon from './SubmitChangeIcon';

const DropdownInput = () => {
	const [
		needToShowSuccessChangeIconMessage,
		setNeedToShowSuccessChangeIconMessage,
	] = useState<boolean>(false);
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
					<SubmitChangeIcon
						newIcon={newIcon}
						setNewIcon={setNewIcon}
						setNeedToShowSuccessChangeIconMessage={
							setNeedToShowSuccessChangeIconMessage
						}
					/>
				</div>
			</div>
		);

	return (
		<>
			{needToShowSuccessChangeIconMessage && (
				<ShowMessageBox message="Icon was changed" />
			)}
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
		</>
	);
};

export default DropdownInput;
