import React from "react";
import Image from "../components/Image";
import image1 from "../utils/img/114759.png";
import image2 from "../utils/img/115702.png";
import image3 from "../utils/img/120227.png";
import image4 from "../utils/img/120330.png";
import image5 from "../utils/img/121010.png";
import image6 from "../utils/img/121818.png";
import image7 from "../utils/img/122027.png";
import image8 from "../utils/img/122113.png";
import image9 from "../utils/img/123944.png";
import image10 from "../utils/img/124349.png";
import image11 from "../utils/img/130538.png";
import image12 from "../utils/img/130648.png";
import "../styles/pages.scss";

const Page3 = () => {
	return (
		<div className="page text-justify">
			<h1>Postman</h1>

			<h2>
				Peticiones para <span className="text-italic">Emloyees</span>
			</h2>

			<h3>GET</h3>

			<Image img={image1} alt="Postman" />

			<h3>DELETE</h3>

			<Image img={image2} alt="Postman">
				<p className="img-text light text-muted text-center">
					Base de datos antes de la petición.
				</p>
			</Image>

			<Image img={image3} alt="Postman" />

			<Image img={image4} alt="Postman">
				<p className="img-text light text-muted text-center">
					Base de datos después de la petición.
				</p>
			</Image>

			<h2>
				Peticiones para <span className="text-italic">Products</span>
			</h2>

			<h3>GET</h3>

			<Image img={image5} alt="Postman" />

			<h3>POST</h3>

			<Image img={image6} alt="Postman">
				<p className="img-text light text-muted text-center">
					Base de datos antes de la petición.
				</p>
			</Image>

			<Image img={image7} alt="Postman" />

			<Image img={image8} alt="Postman">
				<p className="img-text light text-muted text-center">
					Base de datos después de la petición.
				</p>
			</Image>

			<h2>
				Peticiones para <span className="text-italic">Customers</span>
			</h2>

			<h3>GET</h3>

			<Image img={image9} alt="Postman" />

			<h3>PUT</h3>

			<Image img={image10} alt="Postman">
				<p className="img-text light text-muted text-center">
					Base de datos antes de la petición.
				</p>
			</Image>

			<Image img={image11} alt="Postman" />

			<Image img={image12} alt="Postman">
				<p className="img-text light text-muted text-center">
					Base de datos después de la petición.
				</p>
			</Image>
		</div>
	);
};

export default Page3;
