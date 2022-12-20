import styled from 'styled-components';
import { device } from '../../utils/devices';

export const Contenedor = styled.div`
	width: 100%;

	@media ${device.mobileXS} {
		display: grid;
		justify-items: center;
		align-items: center;
		justify-content: center;
		align-content: none;
		height: 800px;
	}
	@media ${device.tablet} {
		display: grid;
		justify-items: center;
		align-items: center;
		justify-content: center;
		align-content: center;
		mind-height: 690px;
		column-gap: 4%;
	}
`;

export const TituloUno = styled.div`
	width: 100%;
	margin: 0;
	color: ${(props) => props.theme.colors.primary};

	@media ${device.mobileXS} {
		grid-row: 1;

		font-family: 'Kallisto';
		font-style: normal;
		font-weight: 700;
		font-size: 20px;
		text-align: center;
	}
	@media ${device.tablet} {
		grid-row: 1;
		grid-column: 2;

		font-family: 'Kallisto';
		font-weight: 700;
		font-size: 32px;
		text-align: left;
	}
`;
export const TituloDos = styled.div`
	display: flex;

	width: 100%;
	color: ${(props) => props.theme.colors.primary};

	@media ${device.mobileXS} {
		grid-row: 5;

		justify-content: center;
		align-items: center;
		height: 50px;

		font-family: 'Kallisto';
		font-style: normal;
		font-weight: 700;
		font-size: 15px;

		text-align: center;
	}
	@media ${device.tablet} {
		grid-row: 4;
		grid-column: 2;

		justify-content: flex-start;
		align-items: center;

		margin-left: 0;
		margin-top: 11px;
		margin-bottom: 11px;

		font-family: 'Kallisto';
		font-weight: 700;
		font-size: 32px;
	}
`;

export const Parrafo = styled.p`
	display: flex;
	width: 100%;
	margin: 0px;

	color: ${(props) => props.theme.colors.primary};

	@media ${device.mobileXS} {
		grid-row: 2;
		/* max-width: 250px; */
		max-width: 250px;

		font-family: 'Arial';
		font-style: normal;
		font-weight: 700;
		font-size: 12px;
		text-align: center;
		line-height: 15px;
	}
	@media ${device.tablet} {
		grid-row: 2;
		grid-column: 2;
		max-width: 550px;

		font-family: 'Kallisto';
		font-style: normal;
		font-weight: 500;
		font-size: 20px;
		text-align: left;
	}
`;

export const ContenedorItem = styled.ul`
	display: flex;
	flex-direction: column;
	width: 100%;
	gap: 20px;
	padding-left: 1.2rem;
	list-style-type: circle;

	@media ${device.mobileXS} {
		grid-row: 4;
		justify-content: center;
		max-width: 244px;
		height: 100%;
	}
	@media ${device.tablet} {
		grid-row: 3;
		grid-column: 2;
		justify-content: center;
		align-items: center;
		max-width: 550px;
		height: 100%;
	}
`;
export const Item = styled.li`
	display: flex;
	width: 100%;
	margin: 0px;

	font-family: 'Kallisto';
	font-style: normal;
	font-weight: 500;
	color: ${(props) => props.theme.colors.primary};

	@media ${device.mobileXS} {
		font-size: 12px;
	}
	@media ${device.tablet} {
		font-size: 20px;
	}
`;

export const ContenedorDeBotones = styled.div`
	display: flex;
	@media ${device.mobileXS} {
		grid-row: 6;
		justify-content: center;
		align-items: center;
		flex-direction: row-reverse;
		width: 100%;
		height: 50px;
		gap: 10px;
		padding-bottom: 20px;
	}
	@media ${device.tablet} {
		grid-row: 5;
		grid-column: 2;
		justify-content: start;
		align-items: flex-end;
		flex-direction: row;
		width: 100%;
		height: 60px;
		gap: 20px;
		padding-bottom: 0px;
	}
`;

export const ContenedorDeBotones2 = styled.div`
	display: flex;
	@media ${device.mobileXS} {
		grid-row: 7;

		justify-content: center;
		align-items: center;
		flex-direction: row-reverse;

		width: 360px;
		height: 120px;
		gap: 10px;

		border-radius: 50px 50px 0px 0px;
		background: ${(props) => props.theme.backgrounds.header};
	}
	@media ${device.tablet} {
		grid-row: 6;
		grid-column: 2;

		justify-content: start;
		align-items: flex-end;
		flex-direction: row;

		width: 100%;
		height: 80px;
		gap: 20px;

		border-radius: 0px;
		background: none;
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
		height: 244px;
		width: 244px;
	}
	@media ${device.tablet} {
		grid-row: 1 / spam 6;
		grid-column: 1;
		width: 514px;
		height: 513px;
	}
`;
