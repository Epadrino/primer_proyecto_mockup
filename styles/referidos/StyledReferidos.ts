import styled from 'styled-components';
import { device } from '../../utils/devices';

export const Contenedor = styled.div`
	display: flex;
	flex-direction: column;

	@media ${device.mobileXS} {
		grid-template-columns: 7.5vw auto 7.5vw;
		height: 85.36vh;
		width: 80%;
	}
	@media ${device.tablet} {
		grid-template-columns: 6vw 30vw auto 6vw;
		height: 70.91vh;
		min-height: 500px;
	}
`;
export const ContenedorRuta = styled.div`
	display: flex;
	align-items: center;
	justify-content: left;
	height: 100px;
	width: 100%;
`;

export const FondoFlecha = styled.span`
	display: flex;
	align-items: center;
	justify-content: center;
	background: ${(props) => props.theme.backgrounds.secondary};
	border-radius: 10px;
	width: 40px;
	height: 40px;
`;
export const Titulo = styled.div`
	color: ${(props) => props.theme.colors.primary};

	@media ${device.mobileXS} {
		font-family: ${(props) => props.theme.fonts.primary};
		font-weight: 700;
		font-size: 20px;
	}
	@media ${device.tablet} {
		font-family: ${(props) => props.theme.fonts.primary};
		font-weight: 700;
		font-size: 32px;
	}
`;
export const ContenedorTabla = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
`;

export const BotonLista = styled.div``;
export const ContenedorListaBoton = styled.div`
	justify-content: right;
	display: flex;
	align-items: center;
	height: 100px;
	width: 100%;
`;

export const Flecha = styled.div`
	position: relative;
	@media ${device.mobileXS} {
		width: 15.52px;
		height: 31.05px;
	}
	@media ${device.tablet} {
		width: 15.52px;
		height: 31.05px;
	}
`;
