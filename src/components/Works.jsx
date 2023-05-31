const Works = () => {
	const works = [
		{
			imagen: "https://th.bing.com/th/id/R.0891cd96acbbae3541d5c3ed8789daa2?rik=VG4%2fO7je3Q80mg&riu=http%3a%2f%2fplantadecasas.com%2fwp-content%2fuploads%2f2016%2f11%2fcasa-moderna-Spagnuolo-3.jpg&ehk=6Tyrg2xHAoTVWNlUbLJyBXNDHCZIBm%2fKLsu3lsM4yGI%3d&risl=&pid=ImgRaw&r=0",
			trabajo: "casa",
			titulo: "Construccion de casa desde los planos",
			descr: "Llevamos a cabo la materialización de un diseño arquitectónico único y personalizado. Siguiendo los planos detallados, construimos cada elemento de la casa con atención meticulosa a los detalles y utilizando materiales de alta calidad",
		},
		{
			imagen: "https://th.bing.com/th/id/OIP.A__B8IpYnisAhenYLbbuOwHaF8?pid=ImgDet&rs=1",
			trabajo: "pileta",
			titulo: "Pileta en patio abierto",
			descr: "Creamos un espacio de relajación y diversión para nuestros clientes. Comenzamos por evaluar cuidadosamente el espacio disponible y diseñar una piscina redonda que se adapte perfectamente al entorno del patio.",
		},
		{
			imagen: "https://archzine.es/wp-content/uploads/2018/05/ejemplos-de-cocinas-con-isla-modernas-suelo-de-parquet-paredes-y-techo-en-blanco-lamparas-colgantes-y-luces-empotradas-grande-isla.jpg",
			trabajo: "Iluminacion",
			titulo: "Luminaria de ultima generacion",
			descr: "Utilizando tecnología de vanguardia, pusimos luces de última generación para crear ambientes cautivadores y funcionales. Nuestro equipo de expertos en iluminación evaluó cuidadosamente cada espacio para determinar la mejor ubicación y tipo de luces. Utilizamos luces LED de alta eficiencia energética, que proporcionan una iluminación brillante y de calidad, al tiempo que reducen el consumo de energía.",
		},
	];
	return (
		<section
			id="trabajos"
			className="max-w-screen-xl my-5 md:my-10 mx-5 md:mx-auto flex flex-col items-center justify-center"
		>
			<p className=" text-aztec-500 py-2 uppercase font-semibold">
				Mira lo que hacemos
			</p>
			<h2 className="font-bold pb-10 text-3xl uppercase text-center">
				Algunos de nuestros trabajos
			</h2>
			<div className="flex flex-col gap-5">
				{/* card */}
				{works.map((work, index) => (
					<div
						key={index}
						className="relative flex w-full max-w-[48rem] rounded-xl bg-white bg-clip-border text-gray-700 shadow-md "
					>
						<div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
							<img
								src={work.imagen}
								alt={work.titulo}
								className="h-full w-full object-cover"
							/>
						</div>
						<div className="p-6">
							<h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-aztec-400 antialiased">
								{work.trabajo}
							</h6>
							<h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
								{work.titulo}
							</h4>
							<p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
								{work.descr}
							</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Works;
