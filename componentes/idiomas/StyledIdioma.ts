import styled from 'styled-components';
import { device } from '../../utils/devices';

export const Contenedor = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	align-items: center;
	align-content: space-between;
`;

export const IdiomaActivo = styled.h2`
	display: flex;
	justify-content: center;

	color: ${(props) => props.theme.colors.primary};
	font-family: 'Arial';
	font-weight: 700;
	text-align: center;
	letter-spacing: 0px;

	@media ${device.mobileXS} {
		font-size: 13px;
		line-height: 14.95px;
		margin-right: 1px;
		margin-left: 7px;
	}
	@media ${device.tablet} {
		font-size: 16px;
		line-height: 19px;
		margin-right: 1px;
		margin-left: 9px;
	}
`;

export const ButtondeIdioma = styled.button`
	background-color: transparent;
	border-radius: 0px;
	border: 0px;
`;
