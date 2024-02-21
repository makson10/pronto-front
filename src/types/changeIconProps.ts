export interface ChangeIconButtonProps {
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface NewIconPreviewProps {
	newIcon: File;
}

export interface SubmitChangeIconProps {
	newIcon: File;
	setNewIcon: React.Dispatch<React.SetStateAction<File | null>>;
}
