'use client';
import EditField from './EditField';
import { Textarea } from '@nextui-org/react';

interface Props {
	description: string | null;
	setDescription: React.Dispatch<React.SetStateAction<string | null>>;
	errorWithDescription: boolean;
}

const EditDescription = ({
	description,
	setDescription,
	errorWithDescription,
}: Props) => {
	return (
		<EditField
			title="Description"
			description="You can write your description here. It will show in your profile page">
			<Textarea
				id="scrollbar-without-bg"
				defaultValue={description || ''}
				isInvalid={errorWithDescription}
				errorMessage={
					errorWithDescription &&
					'The description should be maximum 255 characters long'
				}
				onValueChange={setDescription}
			/>
		</EditField>
	);
};

export default EditDescription;
