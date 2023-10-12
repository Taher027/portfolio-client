import useTitle from "../../hooks/useTitle";
import AboutMe from "../AboutMe/AboutMe";
import ContactMe from "../ContactMe/ContactMe";
import Projects from "../Projects/Projects";
import Services from "../Services/Services";
import Skills from "../Skills/Skills";
import ProfileMediumDevice from "./Profile/ProfileMediumDevice";

const Home = () => {
	useTitle("Portfolio");
	return (
		<div>
			<ProfileMediumDevice></ProfileMediumDevice>
			<AboutMe></AboutMe>
			<Services></Services>
			<Skills></Skills>
			<Projects></Projects>
			<ContactMe></ContactMe>
		</div>
	);
};

export default Home;
