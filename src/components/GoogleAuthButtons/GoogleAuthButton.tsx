interface Props {
	isLogin: boolean;
}

const GoogleLoginButton = ({ isLogin }: Props) => {
	return (
		<button className="flex items-center justify-center px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
			<img
				src="https://www.google.com/images/icons/product/search-32.gif"
				alt="Google logo"
				className="w-5 h-5 mr-2"
			/>
			<span className="text-gray-700 font-medium">
				{isLogin ? 'Log' : 'Sign'} in with Google
			</span>
		</button>
	);
};

export default GoogleLoginButton;
