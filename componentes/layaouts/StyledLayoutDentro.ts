import styled from 'styled-components';
import { device } from '../../utils/devices';

export const ContenedorLayout = styled.div`
	display: flex;
	flex-direction: column;
`;

export const Cabezera = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	height: 144px;

	background: ${(props) => props.theme.colors.header};
`;

export const ContenedorDeLogo = styled.div`
	display: flex;
	align-items: center;
	@media ${device.mobileXS} {
		margin-left: 25px;
		gap: 7px;
	}
	@media ${device.tablet} {
		margin-left: 88px;
		gap: 17px;
	}
`;

export const Titulo = styled.h1`
	font-family: 'Arial';
	font-style: normal;
	font-weight: 700;
	display: flex;
	align-items: center;

	color: ${(props) => props.theme.colors.primary};

	@media ${device.mobileXS} {
		font-size: 13px;
		line-height: 15px;
	}
	@media ${device.tablet} {
		font-size: 25px;
		line-height: 29px;
	}
`;

export const ContenedorDeMenu = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 30px;
`;
export const ContenedorDeEnlaces = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 58px;
	width: 270px;
`;

export const SeparadorUno = styled.hr`
	height: 53px;
	color: #424242;
`;

export const ContenedorDeBoton = styled.div`
	margin-right: 5%;
`;

export const PieDePagina = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	width: 100%;
	height: 180px;
`;

export const ContenedorIzq = styled.div`
	display: flex;
	margin-left: 8%;
`;

export const ContenedorTextoUnoYDos = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;

	width: 450px;
	margin-left: 8%;
`;

export const ContenedorTextosUno = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: center;
`;
export const ContenedorTextosDos = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;

export const SeparadorDos = styled.hr`
	height: 15px;
	color: ${(props) => props.theme.colors.primary};
	margin: 6px;
`;

export const ContenedorDer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	margin-right: 8%;
`;

export const TextoRedes = styled.h2`
	font-family: 'Kallisto';
	font-style: normal;
	font-weight: 500;
	font-size: 15px;
	line-height: 18px;
`;

export const ContenedorRedesSociales = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 12%;
`;
