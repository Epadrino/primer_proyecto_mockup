import styled from 'styled-components';
import { device } from '../../utils/devices';

export const Contenedor = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;

	@media ${device.mobileXS} {
		height: 91.36vh;
		margin-bottom: 110;
	}
	@media ${device.tablet} {
		height: 70.91vh;
		margin-bottom: 80;
	}
`;
export const ContenedorUno = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding-top: 0px;

	@media ${device.mobileXS} {
	}
	@media ${device.tablet} {
	}
`;
export const TituloWalled = styled.h1`
	display: flex;
	justify-content: center;
	text-align: center;

	font-family: ${(props) => props.theme.fonts.primary};
	color: ${(props) => props.theme.colors.primary};

	@media ${device.mobileXS} {
		font-weight: 400;
		font-size: 20px;
		line-height: 25px;
		margin-top: 28;
		margin-bottom: 29;
	}
	@media ${device.tablet} {
		font-weight: 400;
		font-size: 32px;
		line-height: 41px;
		margin-top: 27;
		margin-bottom: 80;
	}
`;
