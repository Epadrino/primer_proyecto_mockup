import styled from 'styled-components';
import { device } from '../../utils/devices';

export const ContenedorCuerpo = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100%;

	@media ${device.mobileXS} {
	}
	@media ${device.tablet} {
	}
`;

export const ContenedorUno = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	row-gap: 20px;
	height: 100%;

	@media ${device.mobileXS} {
	}
	@media ${device.tablet} {
	}
`;
export const ContenedorDos = styled.div`
	display: flex;
	flex-direction: column;

	height: 100%;

	@media ${device.mobileXS} {
		row-gap: 20px;
		justify-content: start;
	}
	@media ${device.tablet} {
		row-gap: 45px;
		justify-content: center;
		padding-bottom: 70px;
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
