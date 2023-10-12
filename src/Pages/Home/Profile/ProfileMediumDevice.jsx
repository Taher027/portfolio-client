import profile from "../../../assets/images/profile.png";

const ProfileMediumDevice = () => {
	return (
		<section className="w-full px-4 lg:hidden flex md:flex-row items-center flex-col pt-[40px] pb-6">
			<div className="md:w-1/2 w-full flex md:flex-col flex-row justify-center items-center mb-6">
				<div className="flex md:flex-col flex-row justify-between md:h-28 h-auto md:w-auto w-full">
					<h2 className="lg:text-[40px] lg:leading-[65px]  text-[35px] leading-[45px] ">
						Hi There, I'm <span className="text-primary">Taher</span> <br />
						<span className="mt-10">Full-Stack Web Developer</span>
					</h2>
				</div>
			</div>
			<div className="md:w-1/2">
				<img
					src={profile}
					alt=""
					className="h-[280px]  object-cover rounded-3xl md:ml-auto mx-auto"
				/>
			</div>
		</section>
	);
};

export default ProfileMediumDevice;
