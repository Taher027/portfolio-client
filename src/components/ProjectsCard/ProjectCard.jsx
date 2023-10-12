import "../../assets/style/style.css";
const ProjectCard = ({ project, index }) => {
	const { img } = project;
	return (
		<div
			className="single-project-card h-[300px] hober:shadow-lg border-[1px] border-accent rounded-2xl "
			data-aos="fade-up"
			data-aos-delay={`${(index % 2) * 100 + 100}`}
		>
			<img
				src={img}
				alt="project-image"
				className="h-full w-full object-contain"
			/>

			<div className="project-content">
				<h2 className="text-4xl font-semibold leading-[45px] text-center text-accent">
					This section is under development!
				</h2>
			</div>
			<div className="overly"></div>
		</div>
	);
};

export default ProjectCard;
