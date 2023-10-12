import { useRef } from "react";
import emailjs from "@emailjs/browser";
import SectionTitle from "../../components/SectionTitileAndHead/SectionTitle";
import SectionHead from "../../components/SectionTitileAndHead/SectionHead";
import toast from "react-hot-toast";

const ContactMe = () => {
	const props = {
		img: "https://cdn.lordicon.com/diihvcfp.json",
		text: "Contact Me",
	};

	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_3ar38po",
				"template_erxssvr",
				form.current,
				"HqYxmPToHpnMf5eMz"
			)
			.then(
				(result) => {
					console.log(result);

					e.target.reset();
					toast.success(
						"I got Your Message! I will contact you as soon as possible."
					);
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	return (
		<section id="contact" className="lg:mb-16 md:mb-20 mb-16">
			<SectionTitle props={props}></SectionTitle>
			<SectionHead>
				Let's Work <span className="text-primary">Together</span>
			</SectionHead>

			<form ref={form} onSubmit={sendEmail}>
				<div className="flex lg:flex-row md:flex-row flex-col gap-5 mb-5">
					<div className="lg:w-1/2 md:w-1/2">
						<label className="text-sm text-white ">
							Full Name <span className="text-error">*</span>
						</label>
						<br />
						<input
							type="text"
							name="client-name"
							placeholder="Your Name"
							className="input w-full px-0 focus:outline-none "
							required
						/>
					</div>
					<div className="lg:w-1/2 md:w-1/2">
						<label className="text-sm text-white ">
							Email <span className="text-error">*</span>
						</label>
						<br />
						<input
							type="email"
							name="client-email"
							placeholder="Your Email"
							className="input w-full px-0 focus:outline-none "
							required
						/>
					</div>
				</div>
				<label className="text-sm text-white ">
					Message <span className="text-error">*</span>
				</label>
				<textarea
					name="message"
					className="textarea w-full mt-2 p-0 h-60 focus:outline-none"
					placeholder="Your Message"
					required
				></textarea>
				<hr />
				<div className="flex justify-center">
					<input
						type="submit"
						value="send"
						className="btn btn-primary btn-wide rounded-md mt-10 px-6"
					/>
				</div>
			</form>
		</section>
	);
};

export default ContactMe;
