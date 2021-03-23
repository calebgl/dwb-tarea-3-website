import Image from "../components/Image";
import image1 from "../utils/img/005153.png";

const Page2 = () => {
	return (
		<div className="page">
			<h1>Controladores</h1>
			<h2>
				Para la tabla <span className="text-italic">Employee</span>
			</h2>
			<p>
				Después de agregar las dependencias crearemos el primer
				controlador. Para esto nos dirigimos a la carpeta{" "}
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
		</div>
	);
};

export default Page2;
