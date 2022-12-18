import { useState } from 'react';

export const useEstado = (Estado = false) => {
	const [estado, setEstado] = useState(Estado);

	console.log(estado);

	const mostrarOcultar = () => {
		setEstado((prevValue) => !prevValue);
	};

	return {
		estado,
		mostrarOcultar,
	};
};
