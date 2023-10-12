const MobileHeader = () => {
	const navItems = [
		{
			icon: "https://cdn.lordicon.com/osuxyevn.json",
			link: "#home",
		},
		{
			icon: "https://cdn.lordicon.com/bhfjfgqz.json",
			link: "#about",
		},
		{
			icon: "https://cdn.lordicon.com/ofwpzftr.json",
			link: "#services",
		},
		{
			icon: "https://cdn.lordicon.com/svbmmyue.json",
			link: "#skills",
		},
		{
			icon: "https://cdn.lordicon.com/fpmskzsv.json",
			link: "#projects",
		},
		{
			icon: "https://cdn.lordicon.com/diihvcfp.json",
			link: "#contact",
		},
	];
	for (let nav of navItems) {
		const scrollToSection = (e) => {
			e.preventDefault();
			const section = document.querySelector(`${nav?.link}`);
			section.scrollIntoView({ behavior: "smooth" });
		};

		const link = document.querySelector(`a[href="${nav?.link}"]`);
		link?.addEventListener("click", scrollToSection);
	}

	return (
		<div className="flex flex-row justify-between py-3 px-9 bg-base-100 border-[1px] border-[#bbb] rounded-full opacity-70">
			{navItems?.map(({ icon, link }, index) => (
				<a key={index} href={link} className="icon">
					<lord-icon
						src={icon}
						trigger="hover"
						class="current-color"
						style={{ width: "24px", height: "24px" }}
					></lord-icon>
				</a>
			))}
		</div>
	);
};

export default MobileHeader;
