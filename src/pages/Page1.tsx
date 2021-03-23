import Image from "../components/Image";
import image1 from "../utils/img/233705.png";
import image2 from "../utils/img/002355.png";
import "../styles/pages.scss";

const Page1 = () => {
	return (
		<div className="page text-justify">
			<h1>Tarea #2</h1>
			<p>
				En la tarea #2 se modificó el proyecto de la tarea #1 para que
				siguiera los principios{" "}
				<span className="text-italic">SOLID</span> así como también la
				arquitectura de servicios y componentes. Ahora usaremos ese
				mismo proyecto para crear una{" "}
				<span className="text-italic bold">REST API</span> (
				<span className="text-italic">
					RESTful Application Program Interface
				</span>
				) con ayuda de Visual Studio.
			</p>

			<p>
				Cuando se crea un proyecto en Visual Studio, este es guardado en
				una solución, que no es más que un simple contenedor usado para
				organizar uno o más proyectos relacionados. Con esto nosotros
				podemos crear nuestro nuevo proyecto en la misma solución y usar
				lo previamente hecho para nuestra{" "}
				<span className="text-italic">API</span>. Clic derecho en la
				solución{" "}
				<span className="text-italic light">{`Add > New Project`}</span>
				.
			</p>

			<Image img={image1} alt="VS">
				<p className="img-text text-center text-muted">
					Para el tipo de proyecto elegiremos ASP.NET Core Web API con
					.NET5, sin autenticación.
				</p>
			</Image>

			<p>
				Un paso muy importante es agregar las referencias de nuestro
				previo proyecto a este nuevo, con el fin de que podamos usar lo
				ya hecho. Para ello daremos clic derecho a las dependencias del
				nuevo proyecto y seleccionaremos{" "}
				<span className="text-italic light">
					Add Project References...
				</span>{" "}
				Saltará una ventana en la cual selecionaremos el proyecto previo
				y luego <span className="text-italic light">OK</span>.
			</p>

			<Image img={image2} alt="VS">
				<p className="img-text text-center text-muted">
					Podemos verificar que se haya agregado dando doble clic al
					proyecto actual y revisar que exista un{" "}
					<span className="text-italic">ItemGroup</span> que contenga
					un <span className="text-italic">ProjectReference</span> con
					el nombre del proyecto previo.
				</p>
			</Image>

			<p>Ahora toca agregar los controladores.</p>
		</div>
	);
};

export default Page1;
