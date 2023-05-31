import { BsMailbox, BsTwitter, BsWhatsapp } from "react-icons/bs";
const Footer = () => {
	return (
		<footer className="w-full bg-black shadow-[0px_0px_20px_5px_#00000024] py-4">
			<div className="max-w-screen-lg mx-auto flex justify-center gap-4 lg:justify-between">
				<div className="flex flex-col font-semibold self-center text-sm md:block text-white">
					<span>©{new Date().getFullYear()} All rights reserved</span>
				</div>
				<div className="flex justify-center space-x-4 lg:pt-0 lg:col-end-13">
					<a
						rel="noopener noreferrer"
						href="https://www.twitter.com"
						target="_blank"
						title="Email"
						className="flex items-center justify-center w-10 h-10 rounded-full bg-white hover:scale-110 ease-in duration-300"
					>
						<BsMailbox />
					</a>
					<a
						rel="noopener noreferrer"
						href="https://www.twitter.com"
						target="_blank"
						title="Twitter"
						className="flex items-center justify-center w-10 h-10 rounded-full bg-white hover:scale-110 ease-in duration-300"
					>
						<BsTwitter />
					</a>
					<a
						rel="noopener noreferrer"
						href="https://www.twitter.com"
						target="_blank"
						title="Twitter"
						className="flex items-center justify-center w-10 h-10 rounded-full bg-white hover:scale-110 ease-in duration-300"
					>
						<BsWhatsapp />
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
