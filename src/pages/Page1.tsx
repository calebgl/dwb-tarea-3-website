import { useEffect } from "react";
import { highlight } from "../utils/scripts/highlight";
import Image from "../components/Image";
import image1 from "../utils/img/233705.png";
import image2 from "../utils/img/002355.png";
import { codes_page1 } from "../utils/data";
import "../styles/pages.scss";

const Page1 = () => {
	useEffect(() => highlight(), []);

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

			<p>
				Como la tarea nos pide agregar por lo menos 3 controladores
				(entre ellos pueden ser:{" "}
				<span className="text-italic">Employee</span>,{" "}
				<span className="text-italic">Product</span>,{" "}
				<span className="text-italic">Customer</span>) que cumplan con
				los 4 verbos <span className="text-italic">REST</span> (
				<span className="text-italic">GET, POST, DELETE, PUT</span>) ,
				necesitamos crear sus respectivos{" "}
				<span className="text-italic">SC</span> (
				<span className="text-italic">ServiceComponent</span>) en
				nuestro anterior proyecto. Pero, además, también tendremos que
				modificar nuestra clase{" "}
				<span className="text-italic light">EmployeeSC</span> pues
				requeriremos que se pueda tanto obtener, agregar, eliminar y
				actualizar empleados. Entonces para comenzar añadiremos estos
				métodos a la clase{" "}
				<span className="text-italic light">EmployeeSC</span>:
			</p>

			<pre>
				<code>{codes_page1[0]}</code>
			</pre>

			<p>
				Ya con esto podemos pasar a crear la nueva clase{" "}
				<span className="text-italic light">ProductSC</span>. Si
				comenzaramos a hacer esta clase tarde o temprano nos
				percatariamos que sería lo mismo que la clase{" "}
				<span className="text-italic light">EmployeeSC</span>. Entonces,
				con esto en mente, podemos hacer uso de una interface genérica
				que contenga lo elemental para que pueda ser implementada en
				cada <span className="text-italic">ServiceComponent</span>. Y
				qué mejor lugar para agregarla que en el archivo que contiene a
				nuestra clase <span className="text-italic light">BaseSC</span>{" "}
				que habíamos creado durante la realización de la tarea 2.
			</p>

			<pre>
				<code>{codes_page1[1]}</code>
			</pre>

			<p>
				Tenemos los 4 métodos que representan los 4 verbos{" "}
				<span className="text-italic">REST</span> y también las clases
				para filtrar los objetos. La interface tiene 2 tipos de datos
				genéricos puesto que es recomendable no usar el mismo nombre de
				variables que nuestras clases del ORM. Las clases que cambiaran
				el nombre de las propiedades de las clases del ORM las
				guardaremos en una nueva carpeta llamada{" "}
				<span className="text-italic">Models</span> y cada clase llevará
				el nombre de{" "}
				<span className="text-italic light">(NameFromORM)DTO</span> .
				Con todo esto hecho ya podemos empezar con las modificaciones.
				Las clases{" "}
				<span className="text-italic light">EmployeeDTO</span> y{" "}
				<span className="text-italic light">EmployeeSC</span>{" "}
				respectivamente, quedarían así:
			</p>

			<pre>
				<code>{codes_page1[2]}</code>
			</pre>

			<pre>
				<code>{codes_page1[3]}</code>
			</pre>

			<p>
				Para <span className="text-italic">ProductDTO</span> y{" "}
				<span className="text-italic">ProductSC</span> haríamos algo
				parecido:
			</p>

			<pre>
				<code>{codes_page1[4]}</code>
			</pre>

			<pre>
				<code>{codes_page1[5]}</code>
			</pre>

			<p>
				Y lo mismo para <span className="text-italic">CustomerDTO</span>{" "}
				y <span className="text-italic">CustomerSC</span>
			</p>

			<pre>
				<code>{codes_page1[6]}</code>
			</pre>

			<pre>
				<code>{codes_page1[7]}</code>
			</pre>

			<p>
				Ya con todo esto listo podemos empezar a agregar los
				controladores.
			</p>
		</div>
	);
};

export default Page1;
