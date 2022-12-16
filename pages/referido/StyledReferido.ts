import styled from 'styled-components';
import { device } from '../../utils/devices';

export const Contenedor = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	row-gap: 20px;

	@media ${device.mobileXS} {
		margin-top: 52px;
		margin-bottom: 180px;
	}
	@media ${device.tablet} {
	}
`;

export const ContenedorDeBotones = styled.div`
	display: flex;
	justify-content: center;

	@media ${device.mobileXS} {
		gap: 8px;
	}
	@media ${device.tablet} {
		gap: 15px;
	}
`;
