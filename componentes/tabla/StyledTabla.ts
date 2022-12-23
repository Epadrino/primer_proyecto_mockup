import styled from 'styled-components';
import { device } from '../../utils/devices';

export const Contenedor = styled.div`
	width: 100%;

	@media ${device.mobileXS} {
		overflow-x: scroll;
		::-webkit-scrollbar {
			height: 13px;
			background-color: ${(props) => props.theme.backgrounds.header};
		}
		::-webkit-scrollbar-thumb {
			background-color: ${(props) => props.theme.backgrounds.secondary};
			border-radius: 5px;
			width: 74px;
			height: 13;
		}
		padding-bottom: 0px;
		margin: 0;
	}
	@media ${device.tablet} {
		padding-bottom: 30px;
		overflow-x: hidden;
	}
`;

export const Tabla = styled.table`
	color: ${(props) => props.theme.colors.primary};
	font-family: ${(props) => props.theme.fonts.primary};
	width: 600px;
	font-weight: 300;
	text-align: left;

	@media ${device.mobileXS} {
		font-size: 15px;
	}
	@media ${device.tablet} {
		font-size: 15px;
	}
`;
export const TablaCabezera = styled.thead``;
export const TablaCabezeraColumna = styled.tr``;
export const TablaCabezeraColumnaItem = styled.th`
	padding: 0 0 0 25px;
`;
export const TablaCuerpo = styled.tbody``;
export const TablaCuerpoColumna = styled.tr`
	:nth-child(odd) {
		background: black;
	}
`;
export const TablaCuerpoColumnaItem = styled.th`
	padding: 0 0 0 25px;
`;
