import { BotonYaTengoCuenta, BotonContinuar } from '../componentes/botones';
import { InputCodigo } from '../componentes/inputs';
import { LayoutInicio } from '../componentes/layaouts';
import { Contenedor, ContenedorDeBotones } from '../styles/referido/StyledReferido';

export default function Referido() {
	return (
		<LayoutInicio title='Referido'>
			<Contenedor>
				<InputCodigo />
				<ContenedorDeBotones>
					<BotonContinuar />
					<BotonYaTengoCuenta />
				</ContenedorDeBotones>
			</Contenedor>
		</LayoutInicio>
	);
}
