import styled from 'styled-components';
import { device } from '../../utils/devices';

export const Contenedor = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;

	height: 420px;
	@media ${device.mobileXS} {
	}
	@media ${device.tablet} {
	}
`;
export const ContenedordeImput = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-evenly;

	background: rgba(138, 138, 138, 0.5);
	border-radius: 50px;

	@media ${device.mobileXS} {
		margin-bottom: 24px;
		height: 39px;
		width: 277px;
	}
	@media ${device.tablet} {
		margin-bottom: 45px;
		height: 65px;
		width: 489.88px;
	}
`;

export const InputCodigo = styled.input`
	font-family: 'abel';
	font-weight: 400;
	color: ${(props) => props.theme.colors.primary};
	border: none;
	background-color: transparent;
	outline: none;
	text-align: center;
	::placeholder {
		color: ${(props) => props.theme.colors.primary};
	}

	@media ${device.mobileXS} {
		height: 17px;
		width: 211px;
		font-size: 12px;
		line-height: 15px;
		border-radius: nullpx;
	}
	@media ${device.tablet} {
		height: 29px;
		width: 351px;
		font-size: 20px;
		line-height: 24px;
		border-radius: nullpx;
	}
`;
export const ContenedorInfoIcon = styled.div`
	@media ${device.mobileXS} {
	}
	@media ${device.tablet} {
	}
`;

export const ContenedorDeBotones = styled.div`
	display: flex;
	justify-content: center;
	@media ${device.mobileXS} {
	}
	@media ${device.tablet} {
	}
`;
