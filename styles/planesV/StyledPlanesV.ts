import styled from 'styled-components';
import { device } from '../../utils/devices';

export const Contenedor = styled.div`
	display: grid;

	align-items: center;

	width: 100%;

	@media ${device.mobileXS} {
		grid-template-columns: 7.5vw auto 7.5vw;
		height: 85.36vh;
	}
	@media ${device.tablet} {
		grid-template-columns: 6vw 30vw auto 6vw;
		height: 70.91vh;
	}
`;

export const ContenedorIzq = styled.div`
	display: flex;
	flex-direction: column;

	width: 100%;

	@media ${device.mobileXS} {
		grid-row: 1;
		grid-column: 2;
	}
	@media ${device.tablet} {
		grid-column: 2;
		padding: 0;
	}
`;

export const ContenedorDeTexto = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;

	@media ${device.mobileXS} {
	}
	@media ${device.tablet} {
	}
`;

export const Titulo = styled.div`
	width: 100%;
	height: 100%;
	font-style: normal;
	text-align: left;
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
		text-align: left;
	}
`;

export const Parrafo = styled.div`
	width: 100%;
	height: 100%;
	@media ${device.mobileXS} {
		display: none;
	}
	@media ${device.tablet} {
		display: flex;
		width: 100%;
		margin-top: 20px;
		max-width: 430px;

		font-family: ${(props) => props.theme.fonts.primary};
		font-style: normal;
		font-size: 20px;
		color: ${(props) => props.theme.colors.primary};
	}
`;

export const ContenedorDeBotones = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	width: cal(100%-10px);
	margin: 10px;

	@media ${device.mobileXS} {
		justify-content: center;
		flex-direction: row-reverse;
		grid-row: 3;
		grid-column: 1 / 4;

		height: 120px;
		gap: 10px;
	}
	@media ${device.tablet} {
		justify-content: start;
		align-items: flex-start;
		flex-wrap: wrap;

		grid-column: 2;
		grid-row: 2;

		min-height: 120px;
		gap: 20px;
	}
	@media ${device.laptop} {
		justify-content: start;
		align-items: flex-start;
		flex-wrap: nowrap;

		grid-column: 2;
		grid-row: 2;

		min-height: 120px;
		gap: 20px;
	}
`;
