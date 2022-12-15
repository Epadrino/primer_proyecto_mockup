import styled from 'styled-components';
import { device } from '../../utils/devices';

export const Contenedor = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	height: 400px;

	@media ${device.mobileXS} {
		margin-bottom: 110;
	}
	@media ${device.tablet} {
		margin-bottom: 80;
	}
`;

export const Titulo = styled.h1`
	display: flex;
	justify-content: center;
	text-align: center;

	font-family: 'Abel';
	color: ${(props) => props.theme.colors.primary};

	@media ${device.mobileXS} {
		font-weight: 400;
		font-size: 20px;
		line-height: 25px;
		margin-top: 28;
		margin-bottom: 29;
	}
	@media ${device.tablet} {
		font-weight: 400;
		font-size: 32px;
		line-height: 41px;
		margin-top: 27;
		margin-bottom: 80;
	}
`;
