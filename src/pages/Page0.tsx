import { FiExternalLink } from "react-icons/fi";

const Page0 = () => {
	return (
		<div className="page text-justify">
			<h1>Información</h1>

			<p>
				<table>
					<thead>
						<tr>
							<th>Alumnos</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Ángel Caleb Guerrero Luna</td>
						</tr>
						<tr>
							<td>Mario Eduardo Lara Loredo</td>
						</tr>
						<tr>
							<td>Sebastián Ibarra Rodríguez</td>
						</tr>
					</tbody>
				</table>
			</p>

			<p className="weird">
				Código fuente:{" "}
				<a
					href="https://github.com/CalebGuerreroL/REST-API"
					target="_blank"
					rel="noopener noreferrer"
					className="external"
				>
					<p>REST-API</p>
					<FiExternalLink />
				</a>
			</p>
		</div>
	);
};

export default Page0;
