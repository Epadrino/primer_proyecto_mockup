import styled from 'styled-components';

import { device } from '../../utils/devices';

export const Contenedor = styled.div`
	display: grid;
	width: 100%;

	@media ${device.mobileXS} {
		height: auto;
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
	flex-direction: column;
	justify-content: center;
	width: 100%;
	@media ${device.mobileXS} {
		grid-row: 1;
		height: 100px;
	}
	@media ${device.tablet} {
		justify-content: end;
		grid-column: 1;
		height: 100%;
		max-width: 430px;
		paddin-left: 7%;
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
		grid-row: 2;
		flex-direction: column;
		gap: 30px;
	}
	@media ${device.tablet} {
		grid-column: 2;
		grid-row: 1 / spam 2;
		flex-direction: row;
		gap: 4%;
		flex-basis: 60%;
		max-width: 900px;
	}
`;

export const Titulo = styled.div`
	color: ${(props) => props.theme.colors.primary};

	@media ${device.mobileXS} {
		margin-left: 10%;
		margin-top: 11px;
		margin-bottom: 11px;

		font-family: 'Arial';
		font-style: normal;
		font-weight: 700;
		font-size: 20px;
	}
	@media ${device.tablet} {
		margin-left: 0;
		margin-top: 11px;
		margin-bottom: 11px;

		font-family: 'Kallisto';
		font-weight: 700;
		font-size: 32px;
		text-align: left;
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

export const ContenedorDeBotones = styled.div`
	display: flex;
	@media ${device.mobileXS} {
		justify-content: center;
		align-items: center;
		flex-direction: row-reverse;
		grid-row: 3;
		width: 100%;
		height: 120px;
		gap: 10px;
	}
	@media ${device.tablet} {
		justify-content: start;
		align-items: center;
		flex-direction: row;
		grid-column: 1;
		grid-row: 2;
		width: 100%;
		display: grid;
		display: flex;
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
	}
	@media ${device.tablet} {
		flex-direction: column;
		gap: 10px;
	}
`;
export const Productos = styled.div`
	justify-content: center;
	align-items: center;
	background: ${(props) => props.theme.backgrounds.producs};

	@media ${device.mobileXS} {
		height: 117px;
		width: 117px;
		border-radius: 10px;
		border: 2px solid transparent;
		&:hover {
			border: 2px solid ${(props) => props.theme.backgrounds.secondary};
		}
	}
	@media ${device.tablet} {
		height: 148px;
		width: 148px;
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
