'use client';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import EditField from './EditField';
import dayjs from 'dayjs';

interface Props {
	dateOfBirth: string | null;
	setDateOfBirth: React.Dispatch<React.SetStateAction<string | null>>;
}

export default function EditAge({ dateOfBirth, setDateOfBirth }: Props) {
	return (
		<EditField
			title="Date of birth"
			description="Choose your birth date. It will show in your profile page">
			<DatePicker
				value={dateOfBirth ? dayjs(new Date(dateOfBirth)) : null}
				autoFocus={false}
				format="DD/MM/YYYY"
				onChange={(newValue) => {
					const date = newValue?.toDate();
					date?.setHours(date.getHours() + 2);
					setDateOfBirth(date?.toISOString()!);
				}}
				sx={{
					backgroundColor: 'white',
					borderRadius: '.5rem',
				}}
			/>
		</EditField>
	);
}
