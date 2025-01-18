'use client';
import { ChangeEvent, useState } from 'react';
import { IconButton, OutlinedInput } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const SearchBox = () => {
	const [searchTerm, setSearchTerm] = useState<string>('');

	const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(event.target.value);
	};

	const handleSearchSubmit = () => {
		console.log('Searching for: ' + searchTerm);
	};

	return (
		<OutlinedInput
			id="search-input"
			placeholder="Search..."
			value={searchTerm}
			onChange={handleSearchChange}
			sx={{
				borderRadius: '20px',
				bgcolor: '#424242',
				color: 'white',
				width: '200px',
				height: '36px',
			}}
			endAdornment={
				<IconButton onClick={handleSearchSubmit}>
					<SearchOutlinedIcon sx={{ color: 'white' }} />
				</IconButton>
			}
		/>
	);
};

export default SearchBox;
