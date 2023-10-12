import ProjectCard from "../../components/ProjectsCard/ProjectCard";
import SectionHead from "../../components/SectionTitileAndHead/SectionHead";
import SectionTitle from "../../components/SectionTitileAndHead/SectionTitle";

const Projects = () => {
	const projectsItems = [
		{ img: "https://i.ibb.co/5nyqHj6/best-five.png" },
		{ img: "https://i.ibb.co/TM4pQWs/Healty-Food.png" },
		{ img: "https://i.ibb.co/Fgj6Z3R/News-Today.png" },
		{ img: "https://i.ibb.co/BBNWxVt/Test-Your-Skill.png" },
	];

	const props = {
		img: "https://cdn.lordicon.com/fpmskzsv.json",
		text: "My Projects",
	};
	return (
		<section id="projects" className="lg:mb-20 md:mb-20 mb-16">
			<SectionTitle props={props}></SectionTitle>
			<SectionHead>
				Featured <span className="text-primary">Projects</span>
			</SectionHead>

			<div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-5 ">
				{projectsItems.map((project, index) => (
					<ProjectCard
						key={index}
						project={project}
						index={index}
					></ProjectCard>
				))}
			</div>
		</section>
	);
};

export default Projects;
