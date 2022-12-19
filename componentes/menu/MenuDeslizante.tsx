import { useEstado } from '../../hooks';
import { BotonMenuTlf, BotonX } from '../botones';
import { Menu } from './Menu';
import { ContenedorBotonX } from './StyledMenu';
import {
	ContenedorMenuTlf,
	ContenedorDeBoton,
	MenuTelefono,
	EstiloMenu,
} from './StyledMenuDeslizante';

export const MenuDeslizante = () => {
	const { estado, mostrarOcultar } = useEstado();

	return (
		<ContenedorMenuTlf>
			{estado ? (
				<MenuTelefono>
					<EstiloMenu>
						<ContenedorBotonX>
							<BotonX onClick={mostrarOcultar} />
						</ContenedorBotonX>
						<Menu />
					</EstiloMenu>
				</MenuTelefono>
			) : (
				<ContenedorDeBoton>
					<BotonMenuTlf onClick={mostrarOcultar} />
				</ContenedorDeBoton>
			)}
		</ContenedorMenuTlf>
	);
};
