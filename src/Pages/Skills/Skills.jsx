import SectionTitle from "../../components/SectionTitileAndHead/SectionTitle";
import SectionHead from "../../components/SectionTitileAndHead/SectionHead";
import SkillCard from "../../components/SkillCard/SkillCard";
import { SkillsContent as skills } from "../../components/SkillCard/SkillsContent";

const Skills = () => {
	const props = {
		img: "https://cdn.lordicon.com/svbmmyue.json",
		text: "My Skills",
	};

	return (
		<section id="skills" className="lg:mb-20 md:mb-20 mb-16">
			<SectionTitle props={props}></SectionTitle>
			<SectionHead>
				My <span className="text-primary">Advantages</span>
			</SectionHead>
			<div className="grid grid-cols-1 gap-20">
				{skills?.map((items, index) => (
					<SkillCard key={index} index={index} items={items}></SkillCard>
				))}
			</div>
		</section>
	);
};

export default Skills;
