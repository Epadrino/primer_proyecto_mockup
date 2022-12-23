import styled from 'styled-components';

import { device } from '../../utils/devices';

export const Contenedor = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	height: 70.91vh;

	@media ${device.mobileXS} {
		height: 91.36vh;
	}
	@media ${device.tablet} {
		height: 70.91vh;
		gap: 5%;
	}
`;

export const ContenedorIzq = styled.div`
	display: flex;
	width: 100%;
	align-items: center;
	justify-content: center;
`;

export const Titulo = styled.div`
	color: ${(props) => props.theme.colors.primary};

	@media ${device.mobileXS} {
		font-family: ${(props) => props.theme.fonts.primary};
		font-style: normal;
		font-weight: 700;
		font-size: 20px;
	}
	@media ${device.tablet} {
		font-family: ${(props) => props.theme.fonts.primary};
		font-weight: 700;
		font-size: 32px;
		text-align: left;
	}
`;

export const ContenedorDeTextos = styled.div`
	display: flex;
	@media ${device.mobileXS} {
		justify-content: center;
		align-items: center;
		flex-direction: column;
		width: 100%;
		gap: 10px;
	}
	@media ${device.tablet} {
		display: none;
	}
`;

export const TextoDeTarjetas = styled.div`
	color: ${(props) => props.theme.colors.primary};
	font-family: ${(props) => props.theme.fonts.primary};
	font-style: normal;
	font-weight: 700;
	font-size: 20px;

	@media ${device.mobileXS} {
		display: none;
	}
	@media ${device.tablet} {
		display: flex;
	}
`;

export const ContenedorDeBotones = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	@media ${device.mobileXS} {
		flex-direction: row-reverse;
		gap: 10px;
	}
	@media ${device.tablet} {
		flex-direction: row;
		grid-row: 3;
		gap: 20px;
	}
`;

export const ContenedorDer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	overflow: hidden;
`;
export const ContenedorDeProductos = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;

	@media ${device.mobileXS} {
		gap: 10px;
	}
	@media ${device.tablet} {
		gap: 10px;
	}
`;

export const Productos = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	background: ${(props) => props.theme.backgrounds.producs};
	border-radius: 10px;

	position: relative;
	width: 376px;
	:after {
		content: '';
		display: block;
		padding-bottom: 100%;
	}
	height: 376px;
	:after {
		content: '';
		display: block;
		padding-top: 100%;
	}

	@media ${device.mobileXS} {
		max-width: 230px;
		max-height: 230px;
	}
	@media ${device.tablet} {
		max-height: 275px;
		max-height: 275px;
	}
	@media ${device.laptop} {
		max-width: 400px;
		max-height: 400px;
	}
`;

export const ContenedorDeFlecha = styled.div`
	height: 46px;
	width: 45.2068977355957px;

	background: ${(props) => props.theme.colors.tertiary};
	border-radius: 50px;

	@media ${device.mobileXS} {
		display: none;
	}
	@media ${device.tablet} {
		display: none;
	}
	@media ${device.laptop} {
		display: contents;
	}
`;
