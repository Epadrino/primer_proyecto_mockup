import { BotonAccion } from '../componentes/botones';
import { Input } from '../componentes/inputs';
import { LayoutUsuario } from '../componentes/layaouts';
import { useEstado } from '../hooks';

import {
	Contenedor,
	ContenedorIcon,
	ContenedorUno,
	ContenedorDos,
	MensajeDos,
	MensajeUno,
	TituloUsuario,
	Pregunta,
	ContenedorMensajeUno,
	ContenedorMensajeTres,
	MensajeTres,
	ContenedorDeBoton,
	ContenedorCuerpo,
	BotonDeLeerMas,
} from '../styles/usuario/StyledUsuario';

export default function Usuario() {
	const { estado, mostrarOcultar } = useEstado(false);

	return (
		<LayoutUsuario title='Usuario'>
			<ContenedorCuerpo>
				<ContenedorUno>
					<img
						src='/images/logo/logo_mockup.png'
						alt='Cargando Logo'
					/>
				</ContenedorUno>
				<ContenedorDos>
					<TituloUsuario>Crea un usuario</TituloUsuario>
					{/* <Pregunta>¿Tienes dudas?</Pregunta> */}
					<Contenedor>
						<Input placeholder={'Código de referido'} />
						<ContenedorIcon>
							<img
								src='/images/iconos/Check.png'
								alt='Cargando Logo'
							/>
						</ContenedorIcon>
					</Contenedor>
					{/* <ContenedorMensajeUno>
						<MensajeUno>
							Usa solo letras y números. Recuerda que este será el
							usuario que aparece en tu link de referido.
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
					</ContenedorMensajeUno> */}
					<Input placeholder={'correo'} />
					<ContenedorMensajeTres>
						<MensajeTres>
							Lo usaremos únicamente para enviarte información
							relevante del proyecto.
						</MensajeTres>
					</ContenedorMensajeTres>
					<ContenedorDeBoton>
						<BotonAccion text='Continuar' />
					</ContenedorDeBoton>
				</ContenedorDos>
			</ContenedorCuerpo>
		</LayoutUsuario>
	);
}
