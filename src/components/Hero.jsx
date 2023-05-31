import { useState } from "react";
import { useEffect } from "react";
// import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

const Hero = () => {
	const images = [
		{
			id: 0,
			imagen: "https://res.cloudinary.com/dnqmez68n/image/upload/v1685544877/casa3_vdqegp.jpg",
			nombre: "Construimos la pileta de tus sueños",
		},
		{
			id: 1,
			imagen: "https://res.cloudinary.com/dnqmez68n/image/upload/v1685544877/casa1_answ0b.jpg",
			nombre: "Diseñamos y construimos tu hogar",
		},
		{
			id: 2,
			imagen: "https://res.cloudinary.com/dnqmez68n/image/upload/v1685544876/casa4_kuuh9y.jpg",
			nombre: "Refaccionamos cada rincon de tu casa",
		},
		{
			id: 3,
			imagen: "https://res.cloudinary.com/dnqmez68n/image/upload/v1685544876/casa2_kjzf1h.jpg",
			nombre: "Ilumina toda tu casa",
		},
	];

	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setCurrentIndex((currentIndex + 1) % images.length);
		}, 5000);

		return () => {
			clearInterval(intervalId);
		};
	}, [currentIndex]);

	return (
		<div className="h-full w-full">
			{images.map((img, index) => (
				<div key={index} className="w-full h-full relative">
					<div
						className={`transition-all h-screen duration-500 ease-in-out flex flex-col justify-center items-center md:items-start ${
							index === currentIndex ? "block" : "hidden"
						}`}
					>
						<CSSTransition
							key={index}
							timeout={500}
							classNames="images"
							appear={true}
							in={index === currentIndex}
						>
							<>
								<img
									className="w-full h-full object-cover aspect-auto"
									src={img.imagen}
									alt={img.nombre}
								/>
								<div className="w-auto h-1/3 my-auto absolute inset-y-0 md:left-4 flex flex-col items-center justify-center md:items-start md:px-8 bg-primary-bg/40 bg-black bg-opacity-20 backdrop-blur-sm rounded-lg drop-shadow-md">
									<h1 className="text-shadow shadow-black/60 text-4xl p-7 md:text-5xl font-bold uppercase max-w-lg text-white">
										{img.nombre}
									</h1>
									{/* <div className="flex flex-col sm:flex-row gap-4 md:gap-8 md:mt-10 text-center p-7">
										<Link
											to="/register"
											className="border-2 md:w-48 px-10 p-3 uppercase font-Barlow font-bold md:text-xl rounded-md bg-primary-400/80 border-transparent text-primary-bg hover:bg-primary-400 hover:text-primary-bg  ease-in-out duration-500"
										>
											Comenzá
										</Link>
										<a
											href="#objective"
											className="border-2 md:w-48 px-10 p-3 font-Barlow uppercase font-bold md:text-xl rounded-md bg-transparent text-primary-100 hover:bg-primary-400 hover:text-primary-bg hover:border-transparent ease-in-out duration-500"
										>
											Saber más
										</a>
									</div> */}
								</div>
							</>
						</CSSTransition>
					</div>
				</div>
			))}
		</div>
	);
};

export default Hero;
