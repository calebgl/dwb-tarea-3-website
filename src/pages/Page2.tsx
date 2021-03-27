import { useEffect } from "react";
import { highlight } from "../utils/scripts/highlight";
import Image from "../components/Image";
import image1 from "../utils/img/005153.png";
import { codes_page2 } from "../utils/data";
import "../styles/pages.scss";

const Page2 = () => {
	useEffect(() => highlight(), []);

	return (
		<div className="page text-justify">
			<h1>Controladores</h1>
			<h2>
				Para la tabla <span className="text-italic">Employees</span>
			</h2>
			<p>
				Después de haber hecho todo lo anterior, crearemos el primer
				controlador, lo llamaremos{" "}
				<span className="text-italic light">EmployeeController</span>{" "}
				(Es importante que este en su nombre contenga{" "}
				<span className="text-italic">Controller</span>, sino no
				funcionará). Para esto nos dirigimos a la carpeta{" "}
				<span className="text-italic">Controllers</span> damos clic
				derecho{" "}
				<span className="text-italic light">{`Add > Controller`}</span>.
			</p>

			<Image img={image1} alt="VS">
				<p className="img-text text-center text-muted">
					Hay que verificar que las opciones seleccionadas a la
					izquierda sean{" "}
					<span className="text-italic light">{`Common > API`}</span>{" "}
					y a la derecha{" "}
					<span className="text-italic light">
						API Controller with read/write actions
					</span>
					.
				</p>
			</Image>

			<p>
				Nos aparecerá una plantilla en la cual podemos mandar a llamar
				los métodos que modificamos en el proyecto previo. Como
				resultado final obtendremos esto:
			</p>

			<pre>
				<code>{codes_page2[0]}</code>
			</pre>

			<h2>
				Para la tabla <span className="text-italic">Products</span>
			</h2>

			<pre>
				<code>{codes_page2[1]}</code>
			</pre>

			<h2>
				Para la tabla <span className="text-italic">Customers</span>
			</h2>

			<pre>
				<code>{codes_page2[2]}</code>
			</pre>
		</div>
	);
};

export default Page2;
