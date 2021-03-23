import { Route, Switch } from "react-router-dom";
import { routes } from "../utils/data";

const Main = () => {
	return (
		<main className="main">
			<div className="container">
				<Switch>
					{routes.map((route, index) => {
						return (
							<Route key={index} exact path={`${route.to}`}>
								{route.render}
							</Route>
						);
					})}
				</Switch>
			</div>
		</main>
	);
};

export default Main;
