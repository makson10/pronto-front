'use client';

interface Props {
	defaultDescription: string | null;
}

export default function ChangeDescription({ defaultDescription }: Props) {
	return (
		<div className="flex flex-col gap-6">
			<div>
				<p className="font-bold text-lg">Description</p>
				<p>
					You can write your description here. It will show in your profile page
				</p>
				{/* <TextField /> */}
			</div>
		</div>
	);
}
