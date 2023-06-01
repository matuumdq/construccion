import {
	AiOutlineWhatsApp,
	AiOutlineInstagram,
	AiOutlineFacebook,
} from "react-icons/ai";
import Form from "./Form";
const Contact = () => {
	return (
		<section
			id="contact"
			className="max-w-screen-xl my-5 md:my-10 mx-5 md:mx-auto flex flex-col items-center justify-center animate-fade duration-200"
		>
			<p className=" text-aztec-500 py-2 uppercase font-semibold">
				Contactanos
			</p>
			<h2 className="font-bold pb-10 text-3xl uppercase text-center">
				Encontranos en nuestras redes
			</h2>
			<div className="flex gap-5">
				<a href="" target="_blank" rel="noreferrer">
					<AiOutlineWhatsApp
						size={45}
						className="cursor-pointer text-aztec-500 hover:scale-110 duration-300 hover:animate-pulse"
					/>
				</a>
				<a
					href="https://www.instagram.com"
					target="_blank"
					rel="noreferrer"
				>
					<AiOutlineInstagram
						size={45}
						className="cursor-pointer text-aztec-500 hover:scale-110 duration-300 hover:animate-pulse"
					/>
				</a>
				<a
					href="http://www.facebook.com"
					target="_blank"
					rel="noreferrer"
				>
					<AiOutlineFacebook
						size={45}
						className="cursor-pointer text-aztec-500 hover:scale-110 duration-300 hover:animate-pulse"
					/>
				</a>
			</div>
			<h3 className="font-bold h-auto pb-10 text-3xl uppercase text-center mt-5 mx-5 md:mx-auto">
				O envianos un correo
			</h3>
			<Form />
		</section>
	);
};

export default Contact;
