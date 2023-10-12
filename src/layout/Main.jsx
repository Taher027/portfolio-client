import { Outlet } from "react-router-dom";
import Profile from "../Pages/Home/Profile/Profile";
import Footer from "../Pages/Shared/Footer";
import SocialLinks from "../components/SocialLinks/SocialLink";
import Header from "../Pages/Shared/Header";
import MobileHeader from "../Pages/Shared/MobileHeader";

const Main = () => {
	return (
		<div
			id="home"
			className="max-w-[1440px] mx-auto flex gap-10 lg:px-4 md:px-8 px-4 "
		>
			<div className="w-[380px] lg:block hidden">
				<Profile />
			</div>
			<div className="lg:max-w-[1000px] mt-6 ">
				<Outlet></Outlet>
				<Footer></Footer>
			</div>
			<div className="w-[60px] lg:block md:block hidden">
				<Header></Header>
				<SocialLinks></SocialLinks>
			</div>
			<div className="lg:hidden md:hidden block fixed bottom-3 left-10 right-10">
				<MobileHeader></MobileHeader>
			</div>
		</div>
	);
};

export default Main;
