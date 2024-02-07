'use client';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

interface Props {
	defaultDateOfBirth: string | null;
}

export default function ChangeAge({ defaultDateOfBirth }: Props) {
	return (
		<div className="flex flex-col gap-6">
			<div>
				<p className="font-bold text-lg">Date of birth</p>
				<p>Choose your birth date. It will show in your profile page</p>
			</div>
			<DatePicker
				value={defaultDateOfBirth ? dayjs(defaultDateOfBirth) : null}
				autoFocus={false}
				format="DD/MM/YYYY"
				sx={{
					backgroundColor: 'white',
					borderRadius: '.5rem',
					':focus-visible': {
						outlineStyle: 'none',
					},
				}}
			/>
		</div>
	);
}
