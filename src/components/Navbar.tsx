import { Link } from "react-router-dom";
import "../styles/components.scss";

const Navbar = () => {
	return (
		<nav className="navbar sticky">
			<div className="container">
				<Link to="/">Tarea #3</Link>
			</div>
		</nav>
	);
};

export default Navbar;
