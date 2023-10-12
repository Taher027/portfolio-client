import SectionHead from "../../components/SectionTitileAndHead/SectionHead";
import SectionTitle from "../../components/SectionTitileAndHead/SectionTitle";
import { SiReact } from "react-icons/si";
import { HiOutlineCode } from "react-icons/hi";
import { FiCodesandbox } from "react-icons/fi";
import { BiLogoWordpress } from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";

const Services = () => {
	const services = [
		{
			id: 1,
			service: "Frontend Web Development",
			details:
				"I can convert any psd or Figma file into device responsive web application. Capable of doing project in clean code.",
		},
		{
			id: 2,
			service: "React JS Development",
			details:
				"I have hudge exprience on React Js. Comfortable to handle api with redux. Capable of convert any psd figma file into react application.",
		},
		{
			id: 3,
			service: "Next JS Development",
			details:
				"Next.js is a React framework, So as I have exprience both app router & page router of Next Js. Capable of create full stact responsive web aplications with next js. ",
		},
		{
			id: 4,
			service: "Full Stack Development",
			details:
				"With the Frontend developemnt I am skilled in Node JS, Express, TypeScript, Mongoose, JWT and Firebase. Proficient in implementing Mongo DB.",
		},
		{
			id: 5,
			service: "Wordpress Wocommerce & Elementor",
			details:
				"I can convert any psd or figma design into wordpress website with the help of Elementor. I have strong knowldge of Theme, plugin customization. I can do google page optimization.",
		},
	];

	const props = {
		img: "https://cdn.lordicon.com/ofwpzftr.json",
		text: "Services",
	};
	return (
		<section id="services" className="lg:mb-20 md:mb-20 mb-16">
			<SectionTitle props={props}></SectionTitle>
			<SectionHead>
				My <span className="text-primary">Specializations</span>
			</SectionHead>
			<div className="grid grid-cols-2 gap-5">
				{services.map(({ service, details }, index) => (
					<div
						key={index}
						className="hover:text-primary hover:border-primary border-[1px] border-accent p-6 rounded-2xl"
						data-aos="fade-up"
						data-aos-delay={`${(index % 6) * 100 + 100}`}
					>
						{index === 0 && <HiOutlineCode className="text-[40px]" />}
						{index === 1 && <SiReact className="text-[40px]" />}
						{index === 2 && <TbBrandNextjs className="text-[40px]" />}
						{index === 3 && <FiCodesandbox className="text-[40px]" />}
						{index === 4 && <BiLogoWordpress className="text-[40px]" />}
						<div>
							<h2 className="lg:text-2xl md:text-2xl text-xl mt-3 lg:font-normal md:font-normal font-bold">
								{service}
							</h2>
							<p className="text-[#ddd] mt-3 text-sm">{details}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Services;
