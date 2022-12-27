import { BotonImagen } from '../componentes/botones/BotonImagen';
import { LayoutDentro } from '../componentes/layaouts';
import { TablaInformativa } from '../componentes/tabla/TablaInformativa';
import {
	Contenedor,
	ContenedorTabla,
	ContenedorRuta,
	ContenedorListaBoton,
	Titulo,
	FondoFlecha,
} from '../styles/referidos/StyledReferidos';

export default function referidos() {
	return (
		<LayoutDentro title='Referidos'>
			<Contenedor>
				<ContenedorRuta>
					<FondoFlecha>
						<BotonImagen
							src={'/images/iconos/flecha_izq.png'}
							width={15.52}
							height={31.05}
						/>
					</FondoFlecha>
					<Titulo>Referidos</Titulo>
				</ContenedorRuta>
				<ContenedorTabla>
					<TablaInformativa />
				</ContenedorTabla>
				<ContenedorListaBoton>
					<span>
						<BotonImagen
							src={'/images/iconos/flecha_blanca_izq.png'}
							width={15.52}
							height={31.05}
						/>
					</span>
					<p>...</p>
					<span>
						<BotonImagen
							src={'/images/iconos/flecha_blanca_der.png'}
							width={15.52}
							height={31.05}
						/>
					</span>
				</ContenedorListaBoton>
			</Contenedor>
		</LayoutDentro>
	);
}
