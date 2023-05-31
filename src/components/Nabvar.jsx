import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { GrMail } from "react-icons/gr";
import { useState } from "react";

const Navbar = () => {
	const [nav, setNav] = useState(false);
	return (
		<div className="bg-white h-16 mx-auto flex justify-between items-center p-4 sticky top-0 z-20 bg-backblue-200  shadow-[0px_0px_20px_5px_#00000024]">
			{/* Left */}
			<a href="#" className="flex items-center gap-6">
				<img
					src="https://content.wepik.com/statics/30190099/preview-page0.jpg"
					alt="logo"
					className="h-16 w-auto"
				/>
			</a>
			<div className="hidden md:flex items-center cursor-pointer font-medium gap-10 p-1">
				<a
					href="#servicios"
					className="border-y-2 py-1 border-transparent hover:border-aztec-600 hover:text-aztec-600 ease-in duration-300"
				>
					Servicios
				</a>
				<a
					href="#trabajos"
					className="border-y-2 py-1 border-transparent hover:border-aztec-600 hover:text-aztec-600 ease-in duration-300"
				>
					Nuestros trabajos
				</a>
				<a
					href="#testimonios"
					className="border-y-2 py-1 border-transparent hover:border-aztec-600 hover:text-aztec-600 ease-in duration-300"
				>
					Clientes
				</a>
			</div>
			<div
				className="cursor-pointer md:hidden"
				onClick={() => setNav(!nav)}
			>
				<AiOutlineMenu
					size={30}
					className="hover:scale-110 ease-in duration-300 text-aztec-600"
				/>
			</div>

			{/* Mobile Menu */}
			{/* Overlay */}
			{nav ? (
				<div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
			) : (
				""
			)}

			{/* Side menu */}
			<div
				className={
					nav
						? "fixed top-0 left-0 w-full sm:w-[300px] h-screen bg-white z-20 duration-300"
						: "fixed top-0 left-[-120%] w-[300px] h-screen bg-white z-10 duration-300"
				}
			>
				<AiOutlineClose
					size={30}
					className="absolute right-4 top-4 cursor-pointer hover:scale-110 ease-in duration-300"
					onClick={() => setNav(!nav)}
				/>
				<a href="/" onClick={() => setNav(false)}>
					<img
						src="https://content.wepik.com/statics/30190099/preview-page0.jpg"
						alt="logo"
						className="h-32 w-auto mx-auto mt-4"
					/>
				</a>
				<nav>
					<ul className="my-32 flex flex-col px-4 py-8 gap-10 justify-center items-center text-xl text-black">
						<a
							href="#servicios"
							onClick={() => setNav(false)}
							className="border-y-2 py-1 border-transparent hover:border-aztec-600 hover:text-aztec-600 ease-in duration-300 flex"
						>
							Servicios
						</a>
						<a
							href="#trabajos"
							onClick={() => setNav(false)}
							className="border-y-2 py-1 border-transparent hover:border-aztec-600 hover:text-aztec-600 ease-in duration-300 flex"
						>
							Nuestros Trabajos
						</a>
						<a
							href="#testimonios"
							onClick={() => setNav(false)}
							className="border-y-2 py-1 border-transparent hover:border-aztec-600 hover:text-aztec-600 ease-in duration-300 flex"
						>
							<GrMail size={25} className="mr-4" />
							Clientes
						</a>
					</ul>
				</nav>
			</div>
		</div>
	);
};

export default Navbar;
