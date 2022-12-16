import styled from 'styled-components';
import { device } from '../../utils/devices';

export const ContenedordeImput = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-evenly;
	position: relative;
	/* background: rgba(138, 138, 138, 0.5);
	border-radius: 50px; */

	@media ${device.mobileXS} {
		/* margin-top: 32px;
		margin-bottom: 24px;
		height: 39px;
		width: 277px; */
	}
	@media ${device.tablet} {
		/* margin-bottom: 45px;
		height: 65px;
		width: 489.88px; */
	}
`;

export const ContenedorInfoIcon = styled.div`
	@media ${device.mobileXS} {
		position: absolute;
		left: 87.5%;
		top: 41%;
		z-index: 1;
	}
	@media ${device.tablet} {
		position: absolute;
		left: 90%;
		top: 40%;
		z-index: 1;
	}
`;

export const InputDeCodigo = styled.input`
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

export const InputDeUsuario = styled.input`
	font-family: 'abel';
	font-weight: 400;

	background: rgba(138, 138, 138, 0.5);
	border-radius: 50px;
	border: 2px solid transparent;

	text-align: center;

	&:focus {
		border: 2px solid ${(props) => props.theme.colors.secondary};
		outline: none;
	}
	::placeholder {
		color: ${(props) => props.theme.colors.primary};
	}
	@media ${device.mobileXS} {
		margin-top: 25px;
		margin-bottom: 17px;
		height: 39px;
		width: 277px;
		font-size: 12px;
		line-height: 15px;
	}
	@media ${device.tablet} {
		margin-top: 32px;
		margin-bottom: 23px;
		height: 64px;
		width: 517px;
		font-size: 20px;
		line-height: 24px;
	}
`;

export const InputDeCorreo = styled.input`
	font-family: 'abel';
	font-weight: 400;

	background: rgba(138, 138, 138, 0.5);
	border-radius: 50px;
	border: 2px solid transparent;

	text-align: center;

	&:focus {
		border: 2px solid ${(props) => props.theme.colors.secondary};
		outline: none;
	}
	::placeholder {
		color: ${(props) => props.theme.colors.primary};
	}
	@media ${device.mobileXS} {
		margin-top: 22px;
		margin-bottom: 17px;
		height: 39px;
		width: 277px;
		font-size: 12px;
		line-height: 15px;
	}
	@media ${device.tablet} {
		margin-top: 23px;
		margin-bottom: 5px;
		height: 64px;
		width: 517px;
		font-size: 20px;
		line-height: 24px;
	}
`;
