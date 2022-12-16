import styled from 'styled-components';
import { device } from '../../utils/devices';

export const Contenedor = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;

	@media ${device.mobileXS} {
	}
	@media ${device.tablet} {
	}
`;

export const TituloUsuario = styled.h1`
	display: flex;
	justify-content: center;
	text-align: center;
	margin: 0;

	font-family: 'Abel';

	font-weight: 400;
	color: ${(props) => props.theme.colors.primary};

	@media ${device.mobileXS} {
		margin-top: 26px;
		font-size: 20px;
		line-height: 25.49px;
	}
	@media ${device.tablet} {
		margin-top: 0px;
		font-size: 30px;
		line-height: 41px;
	}
`;

export const Pregunta = styled.h1`
	display: flex;
	justify-content: center;
	text-align: center;

	font-family: 'Abel';
	font-weight: 400;
	color: ${(props) => props.theme.colors.primary};

	@media ${device.mobileXS} {
		font-size: 20px;
		line-height: 25.49px;
		display: contents;
	}
	@media ${device.tablet} {
		display: none;
	}
`;
export const ContenedorMensajeUno = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	@media ${device.mobileXS} {
		height: 54px;
		width: 276px;
	}
	@media ${device.tablet} {
		height: 54px;
		width: 529px;
		overflow: none;
	}
`;
export const MensajeUno = styled.h2`
	margin: 0px;
	text-align: center;

	color: ${(props) => props.theme.colors.primary};

	@media ${device.mobileXS} {
		font-family: 'Abel';
		font-weight: 400;
		font-size: 13px;
		line-height: 17px;
		display: none;
	}
	@media ${device.tablet} {
		font-family: 'Kallisto';
		font-weight: 500;
		font-size: 15px;
		line-height: 18px;
		display: table;
	}
`;

export const MensajeDos = styled.h2`
	margin: 0px;
	color: ${(props) => props.theme.colors.primary};

	@media ${device.mobileXS} {
		font-family: 'Abel';
		font-weight: 400;
		font-size: 13px;
		line-height: 17px;
		display: table;
	}
	@media ${device.tablet} {
		font-family: 'Kallisto';
		font-weight: 500;
		font-size: 15px;
		line-height: 18px;
		display: none;
	}
`;
export const BotonDeLeerMas = styled.button`
	font-family: 'Abel';
	font-style: normal;
	background: transparent;
	border: 0px;
	padding: 0px;
	margin: 0px;
	flex-basis: 40%;

	color: #80d1ff;
	@media ${device.mobileXS} {
		font-weight: 400;
		font-size: 13px;
		line-height: 17px;
	}
	@media ${device.tablet} {
		font-size: 32px;
		font-weight: 400;
		line-height: 41px;
		display: none;
	}
`;
export const ContenedorMensajeTres = styled.div`
	@media ${device.mobileXS} {
		height: 60px;
		width: 279px;
	}
	@media ${device.tablet} {
		height: 54px;
		width: 529px;
	}
`;

export const MensajeTres = styled.h2`
	text-align: center;
	margin: 0px;

	color: ${(props) => props.theme.colors.primary};

	@media ${device.mobileXS} {
		font-family: 'Abel';
		font-weight: 400;
		font-size: 13px;
		line-height: 17px;
	}
	@media ${device.tablet} {
		font-family: 'Kallisto';
		font-weight: 500;
		font-size: 15px;
		line-height: 18px;
	}
`;

export const ContenedorDeBoton = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;

	@media ${device.mobileXS} {
	}
	@media ${device.tablet} {
		margin-top: 44px;
		margin-bottom: 100px;
	}
`;
