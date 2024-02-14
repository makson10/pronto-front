'use client';
import EditField from './EditField';
import { Textarea } from '@nextui-org/react';

interface Props {
	description: string | null;
	setDescription: React.Dispatch<React.SetStateAction<string | null>>;
}

export default function EditDescription({
	description,
	setDescription,
}: Props) {
	return (
		<EditField
			title="Description"
			description="You can write your description here. It will show in your profile page">
			<Textarea
				defaultValue={description || ''}
				isInvalid={false}
				errorMessage={
					false && 'The description should be maximum 255 characters long'
				}
				onValueChange={setDescription}
			/>
		</EditField>
	);
}
