'use client';
import { ChangeEvent, useState } from 'react';
import style from '@/styles/searchBox.module.scss';

const SearchBox = () => {
	const [searchTerm, setSearchTerm] = useState<string>('');

	const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(event.target.value);
	};

	const handleSearchSubmit = () => {
		console.log('Searching for: ' + searchTerm);
	};

	return (
		<div className={style['search-box']}>
			<input
				type="text"
				placeholder="Search..."
				value={searchTerm}
				onChange={handleSearchChange}
				className={style['input']}
			/>
			<button onClick={handleSearchSubmit}>
				<img
					width="20"
					height="20"
					src="https://img.icons8.com/ios-filled/50/ffffff/search--v1.png"
					alt="#"
				/>
			</button>
		</div>
	);
};

export default SearchBox;
