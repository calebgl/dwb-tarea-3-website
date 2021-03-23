import { Link } from "react-router-dom";
import "../styles/components.scss";

const Navbar = () => {
	return (
		<nav className="navbar sticky">
			<div className="container">
				<div className="navbar-content">
					<Link to="/">Tarea #3</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
