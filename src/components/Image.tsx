interface ImageProps {
	img: string;
	alt: string;
	children?: JSX.Element;
}

const Image = (props: ImageProps) => {
	const { img, alt, children } = props;
	return (
		<div className="img-container">
			<img src={img} alt={alt} />
			{children}
		</div>
	);
};

export default Image;
