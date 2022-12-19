import styled from 'styled-components';

import { device } from '../../utils/devices';

export const Contenedor = styled.div`
	display: grid;
	width: 100%;

	@media ${device.mobileXS} {
	}
	@media ${device.tablet} {
		justify-items: end;
		justify-content: space-around;
		height: 690px;
		gap: 5%;
	}
`;

export const ContenedorIzq = styled.div`
	display: flex;
	width: 100%;

	@media ${device.mobileXS} {
		justify-content: center;
		align-items: flex-end;

		height: 100px;
	}
	@media ${device.tablet} {
		justify-content: center;
		align-items: flex-end;

		height: 150px;
	}
`;

export const Titulo = styled.div`
	color: ${(props) => props.theme.colors.primary};

	@media ${device.mobileXS} {
		font-family: 'Arial';
		font-style: normal;
		font-weight: 700;
		font-size: 20px;
		padding-bottom: 0px;
	}
	@media ${device.tablet} {
		font-family: 'Kallisto';
		font-weight: 700;
		font-size: 32px;
		text-align: left;
		padding-bottom: 15px;
	}
`;

export const Parrafo = styled.div`
	max-width: 434px;
	width: 100%;

	font-family: 'Kallisto';
	font-style: normal;
	font-weight: 500;
	font-size: 20px;
	color: ${(props) => props.theme.colors.primary};

	@media ${device.mobileXS} {
		display: none;
	}
	@media ${device.tablet} {
		display: flex;
	}
`;

export const ContenedorDeTextos = styled.div`
	display: flex;
	@media ${device.mobileXS} {
		justify-content: center;
		align-items: center;
		flex-direction: column;
		width: 100%;
		height: 120px;
		gap: 10px;
	}
	@media ${device.tablet} {
		justify-content: none;
	}
`;

export const TextoDeTarjetas = styled.div`
	color: ${(props) => props.theme.colors.primary};

	@media ${device.mobileXS} {
		font-family: 'Kallisto';
		font-style: normal;
		font-weight: 700;
		font-size: 20px;
	}
	@media ${device.tablet} {
		display: none;
	}
`;

export const ContenedorDeBotones = styled.div`
	display: flex;
	@media ${device.mobileXS} {
		justify-content: center;
		align-items: center;
		flex-direction: row-reverse;

		width: 100%;
		height: 120px;
		gap: 10px;
	}
	@media ${device.tablet} {
		justify-content: center;
		align-items: center;
		flex-direction: row;
		grid-row: 3;
		width: 100%;
		gap: 20px;
	}
`;

export const ContenedorDeMuestra = styled.div`
	background: ${(props) => props.theme.backgrounds.producs};
	justify-content: center;
	align-items: center;
	border: 2px solid transparent;
	border-radius: 10px;

	&:hover {
		border: 2px solid ${(props) => props.theme.backgrounds.secondary};
	}

	@media ${device.mobileXS} {
		height: 309px;
		width: 309px;
	}
	@media ${device.tablet} {
		width: 466px;
		height: 465px;
	}
`;

export const ContenedorDeProductos = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	@media ${device.mobileXS} {
		padding: auto;
		flex-direction: row;
		gap: 10px;
		height: 350px;
	}
	@media ${device.tablet} {
		flex-direction: row;
		height: 100%;
		gap: 10px;
	}
`;
export const Productos = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: end;
	align-items: center;
	background: ${(props) => props.theme.backgrounds.producs};

	@media ${device.mobileXS} {
		height: 252px;
		width: 230px;
		border-radius: 10px;
		border: 2px solid transparent;
		&:hover {
			border: 2px solid ${(props) => props.theme.backgrounds.secondary};
		}
	}
	@media ${device.tablet} {
		height: 406px;
		width: 376px;
		border-radius: 10px;
		border: 1px solid transparent;
		&:hover {
			border: 1px solid ${(props) => props.theme.backgrounds.secondary};
		}
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
		display: contents;
	}
`;
