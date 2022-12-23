import { useEstado } from '../../hooks';
import { BotonMenuTlf, BotonX } from '../botones';
import { Menu } from './Menu';
import { ContenedorBotonX } from './StyledMenu';
import {
	ContenedorMenuTlf,
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
				<BotonMenuTlf onClick={mostrarOcultar} />
			)}
		</ContenedorMenuTlf>
	);
};
