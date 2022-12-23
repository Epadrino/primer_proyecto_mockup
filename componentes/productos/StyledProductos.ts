import styled from 'styled-components';
import { device } from '../../utils/devices';

export const Contenedor = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	position: relative;
	overflow: hidden;
	min-height: 500px;

	@media ${device.mobileXS} {
		grid-row: 2;
		grid-column: 1/4;
	}

	@media ${device.tablet} {
		grid-column: 3;
		grid-row: 1 / spam 2;
	}
`;
export const ContenedorDeProductos = styled.div`
	display: flex;
	justify-content: center;
	width: 90%;
	height: 80%;
	grid-gap: 10px;

	@media ${device.mobileXS} {
		flex-direction: column;
	}

	@media ${device.tablet} {
		flex-direction: row;
	}
`;
export const ContenedorDeProductos1 = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 10px;

	height: 100%;

	@media ${device.mobileXS} {
	}

	@media ${device.tablet} {
		justify-items: center;
	}
`;

export const ContenedorDeProductos2 = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 10px;
	height: 100%;

	@media ${device.mobileXS} {
		flex-direction: row;
	}

	@media ${device.tablet} {
		flex-direction: column;
	}
`;

export const ContenedorBotonArriba = styled.div`
	@media ${device.mobileXS} {
		display: none;
	}
	@media ${device.tablet} {
		display: flex;
		justify-content: center;
	}
`;
export const ContenedorBotonAbajo = styled.div`
	@media ${device.mobileXS} {
		display: none;
	}
	@media ${device.tablet} {
		display: flex;
		justify-content: center;
	}
`;

export const Producto1 = styled.div`
	background: ${(props) => props.theme.backgrounds.producs};
	border: 2px solid transparent;
	border-radius: 10px;

	&:hover {
		border: 2px solid ${(props) => props.theme.backgrounds.secondary};
	}

	position: relative;
	width: 465px;

	:after {
		content: '';
		display: block;
		padding-bottom: 100%;
	}

	@media ${device.mobileL} {
		max-width: 310px;
		max-height: 310px;
	}
	@media ${device.tablet} {
		max-height: 375px;
		max-width: 375px;
	}
	@media ${device.laptop} {
		max-height: 400px;
		max-width: 400px;
	}
`;

export const Producto2 = styled.div`
	border-radius: 10px;

	background: ${(props) => props.theme.backgrounds.producs};

	position: relative;
	width: 148px;

	:after {
		content: '';
		display: block;
		padding-bottom: 100%;
	}
	@media ${device.mobileXS} {
		min-width: 117px;
		min-height: 117px;
		border: 2px solid transparent;
		&:hover {
			border: 2px solid ${(props) => props.theme.backgrounds.secondary};
		}
	}
	@media ${device.tablet} {
		border: 1px solid transparent;
		&:hover {
			border: 1px solid ${(props) => props.theme.backgrounds.secondary};
		}
	}
`;
