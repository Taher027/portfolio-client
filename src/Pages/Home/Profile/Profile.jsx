import profileImg from "../../../assets/images/profile.png";
import SocialLinks from "../../../components/SocialLinks/SocialLink";

const Profile = () => {
	return (
		<div className="lg:w-[380px] lg:border-[1px] border-[#bbb] hover:border-primary rounded-3xl px-6 py-6 lg:sticky top-14">
			<img src={profileImg} alt="" className="h-[280px]    mx-auto mb-5" />

			<h2 className="lg:text-[25px] lg:leading-[35px] md:text-[20px] md:leading-[30px] text-[20px] leading-[25px] ">
				Hi There, I'm <span className="text-primary">Taher</span> <br />
				Full-Stack Web Developer
			</h2>
			<div className="flex lg:flex-row   justify-start gap-5 items-center mt-6">
				<div>
					<span className=" lg:text-[45px]">2+</span>
					<p className="">
						Years of <br /> Experiences
					</p>
				</div>
				<div>
					<span className=" lg:text-[40px]">20+</span>
					<p className="mt-2">
						Completed <br /> Projects
					</p>
				</div>
			</div>
			<div className="flex flex-col items-center mt-8">
				<button className="btn btn-wide btn-primary ">
					<a href="#contact">Hire Me</a>
				</button>
			</div>
		</div>
	);
};

export default Profile;
