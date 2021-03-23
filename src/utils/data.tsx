import Page0 from "../pages/Page0";
import Page1 from "../pages/Page1";
import Page2 from "../pages/Page2";
import Page3 from "../pages/Page3";

interface Route {
	to: string;
	content: any;
	render: JSX.Element;
}

export const routes: Route[] = [
	{ to: "/", content: "main", render: <Page0 /> },
	{ to: "/tarea-2", content: "Tarea #2", render: <Page1 /> },
	{ to: "/controladores", content: "Controladores", render: <Page2 /> },
	{ to: "/postman", content: "Postman", render: <Page3 /> },
];

export const data: string = "";

export const scrollToTop = () => {
	window.scrollTo(0, 0);
};
