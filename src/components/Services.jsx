const Services = () => {
	return (
		<section
			id="servicios"
			className="max-w-screen-xl my-5 md:my-10 mx-auto flex flex-col items-center justify-center"
		>
			<p className=" text-aztec-500 py-2 uppercase font-semibold">
				Que ofrecemos?
			</p>
			<h2 className="font-bold pb-10 text-3xl uppercase text-center">
				Conoce todos nuestros servicios
			</h2>
			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mx-5">
				<div className="border p-3 flex flex-col gap-3">
					<h3 className="border-b pb-2 font-semibold text-center uppercase">
						Reparaciones y Mantenimiento
					</h3>
					<p className="md:text-sm">
						Nuestro equipo de expertos se especializa en arreglos y
						mantenimiento en general. Brindamos soluciones
						confiables y eficientes para problemas relacionados con
						gas, luz, fontanería, electricidad y más. Ya sea que
						necesites reparaciones rápidas o mantenimiento regular,
						estamos aquí para garantizar la seguridad y el buen
						funcionamiento de tus sistemas.
					</p>
				</div>
				<div className="border p-3 flex flex-col gap-3">
					<h3 className="border-b pb-2 font-semibold text-center uppercase">
						Construccion de Casas
					</h3>
					<p className="md:text-sm">
						Transforma tus sueños en realidad con nuestra
						construcción de casas. Nos encargamos de construir
						viviendas personalizadas y adaptadas a tus necesidades y
						estilo de vida. Ya sea que desees construir una casa
						desde cero o realizar remodelaciones, nuestro equipo de
						profesionales altamente capacitados trabajará en
						estrecha colaboración contigo para hacer de tu hogar un
						espacio acogedor y funcional.
					</p>
				</div>
				<div className="border p-3 flex flex-col gap-3">
					<h3 className="border-b pb-2 font-semibold text-center uppercase">
						Construccion de Piletas
					</h3>
					<p className="md:text-sm">
						Disfruta de un oasis en tu propio hogar con nuestras
						soluciones de construcción de piscinas. Nos
						especializamos en el diseño, instalación y mantenimiento
						de piscinas de alta calidad. Ya sea que busques una
						piscina para relajarte, hacer ejercicio o divertirte,
						ofrecemos opciones personalizadas para que puedas
						disfrutar de un ambiente refrescante y atractivo en tu
						patio trasero.
					</p>
				</div>
			</div>
		</section>
	);
};

export default Services;
