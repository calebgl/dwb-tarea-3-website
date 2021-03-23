import { Route, Switch } from "react-router-dom";
import Page1 from "../pages/Page1";
import Page2 from "../pages/Page2";
import { data } from "../utils/data";

const Main = () => {
	return (
		<main className="main">
			<div className="container">
				<Switch>
					<Route exact path="/">
						{data}
					</Route>
					<Route path="/page-1">
						<Page1 />
					</Route>
					<Route path="/page-2">
						<Page2 />
					</Route>
				</Switch>
			</div>
		</main>
	);
};

export default Main;
