export default function LoadingSpinner() {
	return (
		<div style={overlayStyle}>
			<div style={spinnerStyle} className="animate-spin"></div>
			<p style={letterStyle}>p</p>
		</div>
	);
}

const overlayStyle: React.CSSProperties = {
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

const spinnerStyle: React.CSSProperties = {
	width: '5rem',
	height: '5rem',
	border: '0.5rem solid #f3f3f3',
	borderTop: '0.5rem solid #f06292',
	borderRadius: '50%',
	animation: 'spin 1s linear infinite',
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
