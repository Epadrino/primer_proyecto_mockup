import Image from 'next/image';
import { BotonYaTengoCuenta, BotonContinuar } from '../../componentes/botones';
import { InputCodigo } from '../../componentes/inputs';
import { LayoutInicio } from '../../componentes/layaouts';
import { Contenedor, ContenedorDeBotones } from './StyledReferido';

export default function Referido() {
	return (
		<LayoutInicio>
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
