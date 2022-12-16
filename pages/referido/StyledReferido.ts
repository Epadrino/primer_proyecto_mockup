import styled from 'styled-components';
import { device } from '../../utils/devices';

export const Contenedor = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;

	height: 420px;
	@media ${device.mobileXS} {
	}
	@media ${device.tablet} {
	}
`;

export const ContenedorDeBotones = styled.div`
	display: flex;
	justify-content: center;
	@media ${device.mobileXS} {
	}
	@media ${device.tablet} {
	}
`;
