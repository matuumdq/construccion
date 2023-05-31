import Hero from "./Hero";
import Services from "./Services";
import Sponsors from "./Sponsors";
import Testimonials from "./Testimonials";
import Works from "./Works";

const Home = () => {
	return (
		<div className="">
			<Hero />
			<Sponsors />
			<Services />
			<Works />
			<Testimonials />
		</div>
	);
};

export default Home;
