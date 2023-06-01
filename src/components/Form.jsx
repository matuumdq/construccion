import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "sonner";

const Form = () => {
	const form = useRef();
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [messages, setMessages] = useState("");
	const sendEmail = (e) => {
		e.preventDefault();

		if (name === "" || email === "" || messages === "") {
			toast.error("Todos los campos son obligatorios");
			return;
		}

		emailjs
			.sendForm(
				import.meta.env.VITE_SERVICE,
				import.meta.env.VITE_TEMPLATE,
				form.current,
				import.meta.env.VITE_USER_API
			)
			.then(
				() => {
					toast.success("Email enviado satisfactoriamente");
					e.target.reset();
					setName("");
					setEmail("");
					setMessages("");
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	return (
		<div id="form" className="w-full ">
			<form
				ref={form}
				className="pb-8 mx-5 md:mx-auto max-w-3xl"
				onSubmit={sendEmail}
			>
				<div className="grid md:grid-cols-2 gap-6 w-full max-w-screen-lg items-center justify-center border border-aztec-500 p-2 sm:px-4 md:p-8 rounded shadow-xl">
					<div className="relative md:mx-5 my-2 w-[240px] md:w-full">
						<input
							type="text"
							onChange={(e) => setName(e.target.value)}
							name="floating_name"
							id="floating_name"
							className="block py-2.5 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-400/50 appearance-none focus:outline-none focus:ring-0 focus:border-slate-300 peer"
							placeholder=" "
						/>
						<label
							htmlFor="floating_name"
							className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-slate-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
						>
							Ingrese su nombre
						</label>
					</div>

					<div className="relative my-2 md:mx-5 group flex-grow">
						<input
							type="text"
							onChange={(e) => setEmail(e.target.value)}
							name="floating_email"
							id="floating_email"
							className="block py-2.5 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-400/50 appearance-none focus:outline-none focus:ring-0 focus:border-slate-300 peer"
							placeholder=" "
						/>
						<label
							htmlFor="floating_email"
							className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-slate-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
						>
							Ingrese su Email
						</label>
					</div>

					<div className="relative my-2 md:mx-5 group md:col-span-2 flex-grow">
						<input
							type="text"
							onChange={(e) => setMessages(e.target.value)}
							name="floating_message"
							id="floating_message"
							className="block py-2.5 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-400/50 appearance-none focus:outline-none focus:ring-0 focus:border-slate-300 peer"
							placeholder=" "
						/>
						<label
							htmlFor="floating_message"
							className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-slate-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
						>
							Cuéntenos su duda
						</label>
					</div>
					<div className="justify-self-center items-center md:col-span-2 mb-4">
						<button
							className="w-full border border-aztec-600 px-10 py-2 rounded bg-white text-black font-thin text-lg hover:cursor-pointer hover:scale-105 shadow-md ease-in duration-300 hover:text-white hover:bg-aztec-600 tracking-widest"
							type="submit"
						>
							Enviar
						</button>
					</div>
				</div>
			</form>
			<Toaster richColors />
		</div>
	);
};

export default Form;
