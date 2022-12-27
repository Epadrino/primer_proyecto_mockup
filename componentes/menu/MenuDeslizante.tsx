import { useEstado } from '../../hooks';
import { BotonImagen } from '../botones';
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
							<BotonImagen
								onClick={mostrarOcultar}
								src='/images/iconos/icon_x.png'
								width={31}
								height={31}
							/>
						</ContenedorBotonX>
						<Menu />
					</EstiloMenu>
				</MenuTelefono>
			) : (
				<BotonImagen
					onClick={mostrarOcultar}
					src='/images/iconos/icon_menu.png'
					width={33}
					height={33}
				/>
			)}
		</ContenedorMenuTlf>
	);
};
