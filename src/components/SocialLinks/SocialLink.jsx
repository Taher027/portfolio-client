import { GrFacebookOption, GrGithub, GrLinkedinOption } from "react-icons/gr";
import { FaWhatsapp } from "react-icons/fa";
const SocialLinks = () => {
	return (
		<div className="lg:block md:block hidden sticky lg:top-[47vh] md:top-[53vh]">
			<div className="flex flex-col gap-5 text-white text-[16px]  justify-end ">
				<a
					target="_blank"
					rel="noreferrer"
					href="https://github.com/Taher027"
					className="border-[2px] border-accent hover:border-primary rounded-md p-[12px]  hover:text-primary transition duration-300"
				>
					<GrGithub />
				</a>
				<a
					target="_blank"
					rel="noreferrer"
					href="https://www.linkedin.com/in/taher027/"
					className="border-[2px] border-accent  p-[12px] hover:border-primary rounded-md  hover:text-primary transition duration-300"
				>
					<GrLinkedinOption />
				</a>
				<a
					target="_blank"
					rel="noreferrer"
					href="https://www.facebook.com/taher.bl.27/"
					className="border-[2px] border-accent p-[12px] hover:border-primary rounded-md  hover:text-primary transition duration-300"
				>
					<GrFacebookOption />
				</a>
				<a
					target="_blank"
					rel="noreferrer"
					href="https://wa.me/8801956156665/"
					className="border-[2px] border-accent p-[12px] hover:border-primary rounded-md   hover:text-primary transition duration-300"
				>
					<FaWhatsapp />
				</a>
			</div>
		</div>
	);
};

export default SocialLinks;
