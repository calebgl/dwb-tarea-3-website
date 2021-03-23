import { NavLink } from "react-router-dom";
import "../styles/components.scss";
import { routes, scrollToTop } from "../utils/data";

const Sidebar = () => {
	return (
		<div className="sidebar">
			<div className="sidebar-content sticky">
				<div className="container">
					<ul className="sidebar-list">
						{routes.map((route, index: number) => {
							return (
								<li className="sidebar-item">
									<NavLink
										key={index}
										to={`${route.to}`}
										onClick={scrollToTop}
										activeClassName="active"
									>
										{route.content}
									</NavLink>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
