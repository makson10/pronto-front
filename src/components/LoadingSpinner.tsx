import { Spinner } from '@nextui-org/react';

export default function LoadingSpinner() {
	return (
		<div style={overlayStyle}>
			<Spinner color="danger" size="lg" className="scale-[200%]" />
			<p style={letterStyle}>p</p>
		</div>
	);
}

const overlayStyle: React.CSSProperties = {
	backgroundColor: 'var(--first-bg-color)',
	position: 'fixed',
	left: 0,
	top: 0,
	width: '100%',
	height: '100%',
	zIndex: 9999,
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
};

const letterStyle: React.CSSProperties = {
	paddingBottom: '.8rem',
	fontSize: '2rem',
	fontWeight: 'bold',
	color: '#f06292',
	position: 'absolute',
	left: '50%',
	top: '50%',
	transform: 'translate(-50%, -50%)',
};
