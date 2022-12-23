import styled from 'styled-components';
import { device } from '../../utils/devices';

export const ContenedorMenuTlf = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	@media ${device.mobileXS} {
		display: contents;
		display: flex;
	}
	@media ${device.tablet} {
		display: none;
	}
`;

export const MenuTelefono = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	height: 100vh;
	width: 186px;
	background: black;
`;

export const EstiloMenu = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	margin-top: 45px;
	margin-left: 30px;
	margin-right: 30px;
`;
