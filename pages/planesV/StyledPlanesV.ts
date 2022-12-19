import styled from 'styled-components';

import { device } from '../../utils/devices';

export const Contenedor = styled.div`
	display: flex;
	justify-content: space-around;

	height: 700px;
	max-width: 1440px;
	@media ${device.mobileXS} {
	}
	@media ${device.tablet} {
	}
`;
export const ContenedorIzq = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;
	height: 100%;
	@media ${device.mobileXS} {
	}
	@media ${device.tablet} {
		margin-left: 7%;

		flex-basis: 40%;
	}
`;

export const ContenedorDer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	@media ${device.mobileXS} {
	}
	@media ${device.tablet} {
		gap: 4%;
		flex-basis: 60%;
		padding-right: 7%;
	}
`;

export const Titulo = styled.div`
	font-family: 'Kallisto';
	font-weight: 700;
	font-size: 32px;
	text-align: left;

	color: ${(props) => props.theme.colors.primary};
	@media ${device.mobileXS} {
	}
	@media ${device.tablet} {
		margin-top: 11px;
		margin-bottom: 11px;
	}
`;

export const Parrafo = styled.div`
	font-family: 'Kallisto';
	font-style: normal;
	font-weight: 500;
	font-size: 20px;
	width: 100%;

	color: ${(props) => props.theme.colors.primary};
	@media ${device.mobileXS} {
	}
	@media ${device.tablet} {
		margin-bottom: 55px;
		max-width: 434px;
	}
`;

export const ContenedorDeBotones = styled.div`
	display: flex;
	@media ${device.mobileXS} {
	}
	@media ${device.tablet} {
		gap: 20px;
	}
`;

export const ContenedorDeMuestra = styled.div`
	background: ${(props) => props.theme.backgrounds.producs};
	justify-content: center;
	align-items: center;
	border: 2px solid transparent;

	&:hover {
		border: 2px solid ${(props) => props.theme.backgrounds.secondary};
	}

	@media ${device.mobileXS} {
	}
	@media ${device.tablet} {
		border-radius: 10px;
		width: 466px;
		height: 465px;
	}
`;

export const ContenedorDeProductos = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	@media ${device.mobileXS} {
	}
	@media ${device.tablet} {
		gap: 10px;
	}
`;
export const Productos = styled.div`
	justify-content: center;
	align-items: center;
	background: ${(props) => props.theme.backgrounds.producs};
	border: 1px solid transparent;
	&:hover {
		border: 1px solid ${(props) => props.theme.backgrounds.secondary};
	}

	@media ${device.mobileXS} {
	}
	@media ${device.tablet} {
		height: 148px;
		width: 148px;
		border-radius: 10px;
	}
`;

export const ContenedorDeFlecha = styled.div`
	height: 46px;
	width: 45.2068977355957px;

	background: ${(props) => props.theme.colors.tertiary};
	border-radius: 50px;

	@media ${device.mobileXS} {
	}
	@media ${device.tablet} {
	}
`;
