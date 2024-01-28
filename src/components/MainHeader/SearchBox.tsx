'use client';
import { ChangeEvent, useState } from 'react';

export default function SearchBox() {
	const [searchTerm, setSearchTerm] = useState<string>('');

	const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(event.target.value);
	};

	const handleSearchSubmit = () => {
		console.log('Searching for: ' + searchTerm);
	};

	return (
		<div style={searchBoxStyle}>
			<input
				type="text"
				placeholder="Search..."
				value={searchTerm}
				onChange={handleSearchChange}
				style={inputStyle}
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
}

const searchBoxStyle: React.CSSProperties = {
	display: 'flex',
	alignItems: 'center',
	borderRadius: '10px',
	backgroundColor: '#424242',
	padding: '0.5rem',
};

const inputStyle: React.CSSProperties = {
	backgroundColor: 'transparent',
	outline: 'none',
};
