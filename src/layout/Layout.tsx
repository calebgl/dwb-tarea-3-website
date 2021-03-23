import Main from "./Main";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "./Footer";
import "../styles/layout.scss";
import { BrowserRouter as Router } from "react-router-dom";

const Layout = () => {
	return (
		<Router>
			<Navbar />
			<div className="wrapper">
				<div className="wrapper-content">
					<Sidebar />
					<Main />
				</div>
			</div>
			<Footer />
		</Router>
	);
};

export default Layout;
