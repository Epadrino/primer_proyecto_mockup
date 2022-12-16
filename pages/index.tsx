import { useState } from 'react';

export default function Home() {
	const [mensaje, setmensaje] = useState(false);

	const mostrarMensaje = () => {
		setmensaje(!mensaje);
	};

	return (
		<>
			<h1>mensaje Leer mas {mensaje ? ` si` : ` no`}</h1>
			<button onClick={mostrarMensaje}>decide</button>
		</>
	);
}
