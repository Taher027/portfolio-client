import { FaServer } from "react-icons/fa";
import { HiOutlineCode } from "react-icons/hi";
import { BsServer } from "react-icons/bs";
import { MdSettingsSuggest } from "react-icons/md";

const SkillCard = ({ items, index }) => {
	const { skills, title } = items;
	return (
		<div>
			<h2 className="text-2xl mb-6 flex items-center gap-4">
				{index === 0 && <HiOutlineCode />}
				{index === 1 && <FaServer />}
				{index === 2 && <MdSettingsSuggest />}
				{index === 3 && <BsServer />}
				{title}
			</h2>
			<div className="grid lg:grid-cols-6 md:grid-cols-5 grid-cols-3 gap-5">
				{skills?.map(({ icon, name }, index) => (
					<div
						key={index}
						className="flex flex-col items-center hover:text-primary"
						data-aos="fade-up"
						data-aos-delay={`${(index % 6) * 100 + 100}`}
					>
						<div className="h-36 w-24 flex items-center justify-center rounded-3xl border-[1px] shadow-lg hover:shadow-[#22ce98]">
							<img src={icon} alt="icon" className="h-14 w-14 object-contain" />
						</div>
						<h1 className="text-center mt-4">{name}</h1>
					</div>
				))}
			</div>
		</div>
	);
};

export default SkillCard;
