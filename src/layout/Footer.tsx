import { AiFillGithub } from "react-icons/ai";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="container">
				<p className="icon">
					<a
						href="https://github.com/CalebGuerreroL/REST-API"
						target="_blank"
						rel="noopener noreferrer"
					>
						Código Fuente
						<AiFillGithub />
					</a>
				</p>
				<p>Copyright © {new Date().getFullYear()}</p>
			</div>
		</footer>
	);
};

export default Footer;
