const SectionTitle = ({ props }) => {
	const { img, text } = props;
	return (
		<div className="flex lg:pt-20 md:pt-16  pt-6 mb-16 ">
			<div className="border-[2px]  border-accent hover:border-primary py-2 lg:px-5 px-4 lg:text-sm md:text-sm text-xs flex items-center  gap-2 rounded-full">
				<lord-icon
					src={img}
					trigger="hover"
					colors="primary:#FFF"
					style={{ width: "18px", height: "18px" }}
				></lord-icon>
				{text}
			</div>
		</div>
	);
};

export default SectionTitle;
