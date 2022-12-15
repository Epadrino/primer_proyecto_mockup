import { BotonMetaMask } from '../../componentes/botones/BotonMetaMask';
import { BotonWallet } from '../../componentes/botones';
import { LayoutInicio } from '../../componentes/layaouts';
import { Contenedor, Titulo } from './StyledWalled';

export default function Wallet() {
	return (
		<LayoutInicio>
			<Contenedor>
				<Titulo>Conecta tu Wallet.</Titulo>
				<BotonMetaMask />
				<BotonWallet />
			</Contenedor>
		</LayoutInicio>
	);
}
