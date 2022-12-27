import { BotonIzq } from '../componentes/botones';
import { BotonImagen } from '../componentes/botones/BotonImagen';
import { LayoutDentro } from '../componentes/layaouts';
import { TablaInformativa } from '../componentes/tabla/TablaInformativa';
import {
	Contenedor,
	ContenedorTabla,
	ContenedorRuta,
	ContenedorListaBoton,
	Titulo,
} from '../styles/referidos/StyledReferidos';

export default function referidos() {
	return (
		<LayoutDentro>
			<Contenedor>
				<ContenedorRuta>
					<BotonImagen src={'/images/iconos/flecha_izq.png'} />
					<Titulo>Referidos</Titulo>
				</ContenedorRuta>
				<ContenedorTabla>
					<TablaInformativa />
				</ContenedorTabla>
				<ContenedorListaBoton>
					<BotonImagen src={'/images/iconos/flecha_blanca_izq.png'} />
					<BotonImagen src={'/images/iconos/flecha_blanca_der.png'} />
				</ContenedorListaBoton>
			</Contenedor>
		</LayoutDentro>
	);
}
