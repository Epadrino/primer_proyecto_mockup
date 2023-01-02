import Image from 'next/image';

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
	Flecha,
} from '../styles/referidos/StyledReferidos';

export default function referidos() {
	return (
		<LayoutDentro title='Referidos'>
			<Contenedor>
				<ContenedorRuta>
					<FondoFlecha>
						<BotonImagen>
							<Flecha>
								<Image
									src='/images/iconos/flecha_izq.png'
									alt='Img'
									fill
								/>
							</Flecha>
						</BotonImagen>
					</FondoFlecha>
					<Titulo>Referidos</Titulo>
				</ContenedorRuta>
				<ContenedorTabla>
					<TablaInformativa />
				</ContenedorTabla>
				<ContenedorListaBoton>
					<span>
						<BotonImagen>
							<Flecha>
								<Image
									src='/images/iconos/flecha_blanca_izq.png'
									alt='Img'
									fill
								/>
							</Flecha>
						</BotonImagen>
					</span>
					<p>...</p>
					<span>
						<BotonImagen>
							<Flecha>
								<Image
									src='/images/iconos/flecha_blanca_der.png'
									alt='Img'
									fill
								/>
							</Flecha>
						</BotonImagen>
					</span>
				</ContenedorListaBoton>
			</Contenedor>
		</LayoutDentro>
	);
}
