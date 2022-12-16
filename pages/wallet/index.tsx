import { BotonMetaMask } from '../../componentes/botones/BotonMetaMask';
import { BotonWallet } from '../../componentes/botones';
import { LayoutInicio } from '../../componentes/layaouts';
import { Contenedor, TituloWalled } from './StyledWalled';

export default function Wallet() {
	return (
		<LayoutInicio title='Wallet'>
			<Contenedor>
				<TituloWalled>Conecta tu Wallet.</TituloWalled>
				<BotonMetaMask />
				<BotonWallet />
			</Contenedor>
		</LayoutInicio>
	);
}
