const Footer = () => {
	return (
		<div className="justify-end px-[20%] flex flex-col gap-6 mb-4">
			<div className="border-[1px] border-white"></div>
			<div className="flex flex-row justify-between">
				<p>pronto © 2023-2025</p>
				<div className="flex flex-row gap-2">
					<button>Правила</button>
					<button>Разработчикам</button>
					<button>О pronto</button>
				</div>
				<p>Русский | English</p>
			</div>
		</div>
	);
};

export default Footer;
