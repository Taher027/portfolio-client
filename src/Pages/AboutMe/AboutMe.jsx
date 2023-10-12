import SectionHead from "../../components/SectionTitileAndHead/SectionHead";
import SectionTitle from "../../components/SectionTitileAndHead/SectionTitle";

const AboutMe = () => {
	const props = {
		img: "https://cdn.lordicon.com/bhfjfgqz.json",
		text: "About Me",
	};
	return (
		<section id="about" className="lg:mb-16 md:mb-20 mb-16">
			<SectionTitle props={props}></SectionTitle>
			<SectionHead>
				Every line of <span className="text-primary">code written mirrors</span>{" "}
				the words in a story
			</SectionHead>
			<p className="text-[#ddd] max-w-[800px]">
				I’m a full-stack Web developer who is passionate about making error-free
				websites with 100% client satisfaction. I have excelled in frontend
				development technology and then backend as well. I have a passion for
				learning and sharing my knowledge with others as publicly as possible. I
				love to solve real-world problems. I am strategic, and goal-oriented,
				and always work with an end goal in mind. I pride myself on doing
				quality work and maintaining excellent communication.
			</p>
		</section>
	);
};

export default AboutMe;
