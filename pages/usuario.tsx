import Image from 'next/image';
import { BotonContinuar } from '../componentes/botones';
import { InputCorreo, InputUsuario } from '../componentes/inputs';
import { LayoutUsuario } from '../componentes/layaouts';
import {
	ImagenEscritorio,
	ImagenTlf,
} from '../componentes/layaouts/StyledLayouts';
import { useEstado } from '../hooks';

import {
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
					<ImagenTlf>
						<Image
							src='/images/logo/logo_mockup.png'
							alt='Cargando Logo'
							width={159}
							height={161}
						/>
					</ImagenTlf>
					<ImagenEscritorio>
						<Image
							src='/images/logo/logo_mockup.png'
							alt='Cargando Logo'
							width={296}
							height={299}
						/>
					</ImagenEscritorio>
				</ContenedorUno>
				<ContenedorDos>
					<TituloUsuario>Crea un usuario</TituloUsuario>
					{/* <Pregunta>¿Tienes dudas?</Pregunta> */}
					<InputUsuario />
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
					<InputCorreo />
					<ContenedorMensajeTres>
						<MensajeTres>
							Lo usaremos únicamente para enviarte información
							relevante del proyecto.
						</MensajeTres>
					</ContenedorMensajeTres>
					<ContenedorDeBoton>
						<BotonContinuar />
					</ContenedorDeBoton>
				</ContenedorDos>
			</ContenedorCuerpo>
		</LayoutUsuario>
	);
}
