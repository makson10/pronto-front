'use client';
import { useEffect, useRef } from 'react';
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
	const descriptionInputRef = useRef<HTMLTextAreaElement>(null);

	const enterPreventHandler = (event: KeyboardEvent) => {
		if (event.key === 'Enter') event.preventDefault();
	};

	useEffect(() => {
		descriptionInputRef.current?.addEventListener(
			'keydown',
			enterPreventHandler,
		);

		return () => {
			descriptionInputRef.current?.removeEventListener(
				'keydown',
				enterPreventHandler,
			);
		};
	}, []);

	return (
		<EditField
			title="Description"
			description="You can write your description here. It will show in your profile page">
			<Textarea
				id="scrollbar-without-bg"
				ref={descriptionInputRef}
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
