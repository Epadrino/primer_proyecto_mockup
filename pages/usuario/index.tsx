import { useEffect, useState } from 'react';
import { BotonContinuar } from '../../componentes/botones';
import { InputCorreo, InputUsuario } from '../../componentes/inputs';
import { LayoutUsuario } from '../../componentes/layaouts';
import {
	BotonDeLeerMas,
	MensajeDos,
	MensajeUno,
	TituloUsuario,
	Pregunta,
	ContenedorMensajeUno,
	ContenedorMensajeTres,
	MensajeTres,
	ContenedorDeBoton,
} from './StyledUsuario';

export default function Usuario() {
	const [mensaje, setmensaje] = useState(false);

	const mostrarMensaje = () => {
		setmensaje(!mensaje);
	};

	useEffect(() => {}, [mostrarMensaje]);

	return (
		<LayoutUsuario title='Usuario'>
			<TituloUsuario>Crea un usuario</TituloUsuario>
			<Pregunta>¿Tienes dudas?</Pregunta>
			<InputUsuario />
			<ContenedorMensajeUno>
				<MensajeUno>
					Usa solo letras y números. Recuerda que este será el usuario
					que aparece en tu link de referido.
				</MensajeUno>
				<MensajeDos>
					Usa solo letras y números. Recuerda
					{mensaje
						? ` que este será el usuario que aparece en tu link dereferido.`
						: ` ...`}
					<BotonDeLeerMas onClick={mostrarMensaje}>
						{mensaje ? 'leer menos' : 'leer más'}
					</BotonDeLeerMas>
				</MensajeDos>
			</ContenedorMensajeUno>
			<InputCorreo />
			<ContenedorMensajeTres>
				<MensajeTres>
					Lo usaremos únicamente para enviarte información relevante
					del proyecto.
				</MensajeTres>
			</ContenedorMensajeTres>
			<ContenedorDeBoton>
				<BotonContinuar />
			</ContenedorDeBoton>
		</LayoutUsuario>
	);
}
