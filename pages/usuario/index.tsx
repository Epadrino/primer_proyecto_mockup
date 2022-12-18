import { BotonContinuar } from '../../componentes/botones';
import { InputCorreo, InputUsuario } from '../../componentes/inputs';
import { LayoutUsuario } from '../../componentes/layaouts';
import { useEstado } from '../../hooks';

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
	const { estado, mostrarOcultar } = useEstado(false);

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
					{estado
						? ` que este será el usuario que aparece en tu link dereferido.`
						: ` ...`}
					<BotonDeLeerMas onClick={mostrarOcultar}>
						{estado ? 'leer menos' : 'leer más'}
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
