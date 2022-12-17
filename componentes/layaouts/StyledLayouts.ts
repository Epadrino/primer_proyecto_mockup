import styled from 'styled-components';
import { device } from '../../utils/devices';

export const Contenedor = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: initial;
	align-items: center;
	align-content: space-between;

	@media ${device.mobileXS} {
		heigth: 800px;
	}
	@media ${device.tablet} {
		heigth: 1024px;
	}
`;

export const ImagenTlf = styled.div`
	@media ${device.mobileXS} {
		display: contents;
	}
	@media ${device.tablet} {
		display: none;
	}
`;

export const ImagenEscritorio = styled.div`
	@media ${device.mobileXS} {
		display: none;
	}
	@media ${device.tablet} {
		display: contents;
	}
`;
export const TextodeAbajo = styled.p`
	color: ${(props) => props.theme.colors.primary};
	text-align: center;
	@media ${device.mobileXS} {
		font-size: 18px;
		line-height: 15px;
	}
	@media ${device.tablet} {
		font-size: 25px;
		line-height: 30px;
	}
`;

export const ContenedorDeTexto = styled.div`
	display: flex;
	justify-content: center;

	color: ${(props) => props.theme.colors.primary};
	font-family: 'Kallisto';
	font-weight: 700;
	font-style: normal;

	@media ${device.mobileXS} {
		width: 300px;
	}
	@media ${device.tablet} {
		width: 518px;
	}
`;

export const ContenedorIdioma = styled.div`
	display: flex;
	justify-content: end;
	width: 100%;

	@media ${device.mobileXS} {
		margin-top: 43px;
		margin-bottom: 57px;
		margin-right: 20px;
	}
	@media ${device.tablet} {
		margin-top: 20px;
		margin-bottom: 0px;
		margin-right: 74px;
	}
`;
