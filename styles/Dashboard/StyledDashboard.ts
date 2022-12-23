import styled from 'styled-components';
import { device } from '../../utils/devices';

export const Contenedor = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 90%;
	height: 100%;
	gap: 10%;
`;
export const ContenedorReferidos = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;
	height: 398px;
`;

export const ContenedorCodigo = styled.div`
	position: relative;
	width: 218px;

	::after {
		content: '';
		display: block;
		padding-bottom: 100%;
	}
`;
export const CodigoQR = styled.div`
	position: absolute;
	top: 0px;
	right: 0px;
	z-index: 3;
	width: 220px;

	::after {
		content: '';
		display: block;
		padding-bottom: 100%;
	}
	border-radius: 10px;
	background: ${(props) => props.theme.backgrounds.header};
`;

export const Fondozul = styled.div`
	position: absolute;
	top: 45px;
	left: 0px;
	width: 215px;
	z-index: 2;

	::after {
		content: '';
		display: block;
		padding-bottom: 100%;
	}
	border-radius: 10px;
	background: ${(props) => props.theme.backgrounds.secondary};
`;
export const FondoBlanco = styled.div`
	position: absolute;
	top: 35px;
	left: 0px;
	z-index: 3;
	width: 215px;

	::after {
		content: '';
		display: block;
		padding-bottom: 100%;
	}
	border-radius: 10px;
	background: ${(props) => props.theme.colors.primary};
`;

export const ContenedorReferidosTexto = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 450px;
`;
export const TextoTitulo = styled.h1`
	margin: 0;
	padding: 10px 0px;
	font-weight: 700;
	color: ${(props) => props.theme.colors.primary};
	font-weight: ${(props) => props.theme.fonts.primary};
	@media ${device.mobileXS} {
		font-size: 20px;
	}
	@media ${device.tablet} {
		font-size: 32px;
	}
`;
export const TextoParrafo = styled.h2`
	margin: 0;
	padding: 20px 0px;

	color: ${(props) => props.theme.colors.primary};
	font-weight: ${(props) => props.theme.fonts.primary};
	@media ${device.mobileXS} {
		font-size: 10px;
	}
	@media ${device.tablet} {
		font-size: 20px;
	}
`;

export const ContenedorInput = styled.div`
	width: 100%;
	position: relative;
`;
export const TextoInput = styled.input`
	width: 100%;
	max-width: 450px;
	max-height: 46px;
	border: 0;
	border-radius: 10px;
	background: ${(props) => props.theme.backgrounds.header};
	@media ${device.mobileXS} {
		font-size: 20px;
		height: 21px;
	}
	@media ${device.tablet} {
		font-size: 32px;
		height: 46px;
	}
`;

export const TextoInputBoton = styled.button`
	position: absolute;

	right: 0px;
	top: 0px;

	background: ${(props) => props.theme.backgrounds.secondary};

	font-weight: 700;

	color: ${(Props) => Props.theme.colors.tertiary};

	@media ${device.mobileXS} {
		width: 47px;
		height: 21px;
		font-size: 10px;
		border-radius: 1px;
	}
	@media ${device.tablet} {
		border-radius: 10px;
		height: 46px;
		width: 91px;
		font-size: 32px;
	}
`;
export const ContenedorDatos = styled.div`
	display: flex;
	justify-content: center;
	gap: 20px;
	padding-bottom: 46px;
	@media ${device.mobileXS} {
		flex-direction: column;
	}
	@media ${device.tablet} {
		flex-direction: row;
	}
`;
export const ContenedorDatosDentro = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	gap: 20px;
`;

export const ContenedorDato = styled.div`
	display: flex;
	align-items: center;
	justify-content: space;

	padding: 20px 40px;
	gap: 20px;
	border-radius: 10px;
	background: ${(props) => props.theme.backgrounds.header};

	width: 567px;
	::after {
		content: '';
		display: block;
		padding-bottom: 22%;
	}

	@media ${device.mobileXS} {
		padding: 10px 20px;
		max-width: 299px;
		max-height: 63px;
	}
	@media ${device.tablet} {
		max-width: 350px;
		max-height: 63px;
	}
	@media ${device.laptop} {
		padding: 20px 40px;
		max-width: 567px;
		max-height: 125px;
	}
`;

export const ContenedorTextoDatos = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0;
	padding: 0px;
	width: 50%;
`;

export const TituloDatos = styled.h1`
	font-weight: 700;
	font-size: 20px;
	margin: 0;
	padding: 0;
	color: ${(props) => props.theme.colors.primary};
	font-weight: ${(props) => props.theme.fonts.primary};
	@media ${device.mobileXS} {
		font-size: 14px;
	}
	@media ${device.tablet} {
		font-size: 24px;
	}
`;
export const SubTituloDatos = styled.h2`
	font-weight: 400;
	margin: 0;
	padding: 0;
	color: ${(props) => props.theme.colors.primary};
	font-weight: ${(props) => props.theme.fonts.primary};
	@media ${device.mobileXS} {
		font-size: 14px;
	}
	@media ${device.tablet} {
		font-size: 19px;
	}
`;
export const ContenedorTextoMonto = styled.div`
	display: flex;
	justify-content: center;
	width: 50%;
`;
export const MontoDatos = styled.h1`
	font-weight: 700;
	font-size: 50px;
	margin: 0;
	padding: 0;
	color: ${(props) => props.theme.colors.secondary};
	font-weight: ${(props) => props.theme.fonts.primary};
	@media ${device.mobileXS} {
		font-size: 24px;
	}
	@media ${device.tablet} {
		font-size: 48px;
	}
`;
export const ContenedorListas = styled.div`
	display: flex;
	width: 100%;
	gap: 20px;
`;
export const ContenedorListaTlf = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	border-radius: 10px;
	background: ${(props) => props.theme.backgrounds.header};
`;
export const ContenedorListaEscritorio = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	border-radius: 10px;
	background: ${(props) => props.theme.backgrounds.header};
	@media ${device.mobileXS} {
		display: none;
	}
	@media ${device.tablet} {
		display: block;
	}
`;
export const TituloLista = styled.h1`
	font-weight: 700;
	font-size: 25px;
	margin: 0;
	padding: 25px;
	color: ${(props) => props.theme.colors.primary};
	font-weight: ${(props) => props.theme.fonts.primary};
`;
export const Lista = styled.ul`
	color: ${(props) => props.theme.colors.primary};
	font-weight: ${(props) => props.theme.fonts.primary};
`;
export const ItemLista = styled.li`
	font-size: 15px;
	line-height: 20px;
	color: ${(props) => props.theme.colors.primary};
	font-weight: ${(props) => props.theme.fonts.primary};
`;

export const ContenedorListaBoton = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	@media ${device.mobileXS} {
		display: none;
	}
	@media ${device.tablet} {
		display: block;
	}
`;

export const BotonLista = styled.button`
	width: 100%;
	height: 60px;
	font-weight: 700;
	font-size: 25px;
	border-radius: 0 0 10px 10px;
	color: ${(props) => props.theme.colors.tertiary};
	background: ${(props) => props.theme.backgrounds.secondary};
`;

export const ContenedorBotonesListas = styled.div`
	width: 100%;

	@media ${device.mobileXS} {
		display: block;
	}
	@media ${device.tablet} {
		display: none;
	}
`;
